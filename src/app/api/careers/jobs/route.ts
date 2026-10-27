import {NextResponse} from 'next/server';
export const dynamic='force-dynamic';
export async function GET(){
 try{
  const res=await fetch('http://127.0.0.1:3299/jobs',{cache:'no-store',signal:AbortSignal.timeout(4500)});
  if(!res.ok)throw new Error('Catalog unavailable');
  const data=await res.json();
  return NextResponse.json(data,{headers:{'Cache-Control':'no-store'}});
 }catch{return NextResponse.json({jobs:[],error:'Vacancies temporarily unavailable'},{status:503,headers:{'Cache-Control':'no-store'}})}
}