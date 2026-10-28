import {JOBS,type Job} from './jobs';
type Meta=Record<string,unknown>;
type PublicJob={slug:string;title:string;country:string;location:string;type:string;description:string;requirements:string;metadata?:Meta;created_at?:string};
const items=(x:unknown):string[]=>Array.isArray(x)?x.filter((v):v is string=>typeof v==='string'&&!!v.trim()).map(v=>v.trim()):typeof x==='string'?x.split(/\n|;/).map(v=>v.replace(/^[-•*]\s*/, '').trim()).filter(Boolean):[];
const content=(x:unknown):string=>typeof x==='string'?x.trim():'';
export function normalizeJobs(rows:PublicJob[]):Job[]{
 return rows.filter(j=>j&&/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(j.slug)).map(j=>{
  const meta=j.metadata||{};
  const legacy=JOBS.find(v=>v.slug===j.slug);
  const responsibilities=items(meta.responsibilities);
  const qualifications=items(meta.qualifications);
  const rangeMin=Number(meta.experienceMin),rangeMax=Number(meta.experienceMax);
  const experience=Number.isFinite(rangeMin)&&Number.isFinite(rangeMax)&&rangeMax>0?`${rangeMin}–${rangeMax} years`:Number.isFinite(rangeMin)&&rangeMin>0?`${rangeMin}+ years`:legacy?.experience||'';
  return {
   slug:j.slug,title:j.title,country:j.country,seoTitle:content(meta.seoTitle),seoDescription:content(meta.seoDescription),department:content(meta.department)||legacy?.department||'4BIZ International',location:j.location,
   workType:j.type==='FULL_TIME'?'Full-Time':j.type==='PART_TIME'?'Part-Time':j.type==='CONTRACT'?'Contract':'Internship',
   experience,postedDate:j.created_at?.slice(0,10)||legacy?.postedDate||new Date().toISOString().slice(0,10),
   shortDescription:content(meta.overview)||j.description,
   about:content(meta.overview)||j.description,
   responsibilities:responsibilities.length?responsibilities:legacy?.responsibilities||[],
   qualifications:qualifications.length?qualifications:items(j.requirements).length?items(j.requirements):legacy?.qualifications||[],
   niceToHave:items(meta.benefits)
  };
 });
}
export async function getPublicJobs():Promise<Job[]>{
 const r=await fetch('http://127.0.0.1:3299/jobs',{cache:'no-store',signal:AbortSignal.timeout(4500)});
 if(!r.ok)throw new Error('Jobs unavailable');
 const v=await r.json();return normalizeJobs(v.jobs||[]);
}
