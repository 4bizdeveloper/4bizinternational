import type {Job} from './jobs';
type PublicJob={slug:string;title:string;country:string;location:string;type:string;description:string;requirements:string};
export function normalizeJobs(rows:PublicJob[]):Job[]{
 return rows.filter(j=>j&&/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(j.slug)).map(j=>({
  slug:j.slug,title:j.title,department:'4BIZ International',location:j.location,
  workType:j.type==='FULL_TIME'?'Full-Time':j.type==='PART_TIME'?'Part-Time':j.type==='CONTRACT'?'Contract':'Internship',
  experience:'See requirements',postedDate:'2026-10-27',shortDescription:j.description,
  about:j.description,responsibilities:[],qualifications:j.requirements.split(/\n|;/).map(s=>s.trim()).filter(Boolean)
 }));
}
export async function getPublicJobs():Promise<Job[]>{
 const r=await fetch('http://127.0.0.1:3299/jobs',{cache:'no-store',signal:AbortSignal.timeout(4500)});
 if(!r.ok)throw new Error('Jobs unavailable');
 const v=await r.json();return normalizeJobs(v.jobs||[]);
}