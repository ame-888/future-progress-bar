"use client";
import { useState } from "react";
export function CopyButton({text,label="Copy"}:{text:string;label?:string}){const[copied,setCopied]=useState(false);return <button className="copy-button" onClick={async()=>{await navigator.clipboard.writeText(text);setCopied(true);window.setTimeout(()=>setCopied(false),1800)}}>{copied?"✓ Copied":label}</button>}
