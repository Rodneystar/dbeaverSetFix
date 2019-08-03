#!/usr/bin/env node
import { fstat, statSync, readFileSync, open } from 'fs';

export function main(query: string): string {
  let isFile
  open(  ó)
  try {
    isFile = statSync(query).isFile()
  } catch(e) {}
  if(isFile) {
    query = readFileSync(query).toString() 
  } 
  return query.replace( /\[[^\]\[]*\]/g , (setString, _) => {
    let set = setString.slice(1, -1 )
    .split(" ")
    .map((word) => `'${word}'`)
    .join(",") 

    return `{${set}}`

  })  
}

console.log(main(process.argv[2]))

