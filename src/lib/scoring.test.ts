import test from "node:test";
import assert from "node:assert/strict";
import { calculateBossHP, calculateHistoricalScores, calculateHorsemanScore, calculateHumanityScore } from "./scoring.ts";
const aspects=(scores:(number|null)[],status:"known"|"placeholder"|"unknown"="known")=>scores.map(score=>({score,scoreStatus:score===null?"unknown" as const:status}));
test("Horseman is the arithmetic mean of five aspects",()=>assert.deepEqual(calculateHorsemanScore(aspects([10,20,30,40,50])),{score:30,status:"known"}));
test("Humanity is arithmetic mean of four Horsemen",()=>assert.deepEqual(calculateHumanityScore([20,40,60,80].map(score=>({score,status:"known"}))),{score:50,status:"known"}));
test("boss HP inverts progress",()=>assert.deepEqual(calculateBossHP({score:23.47,status:"known"}),{score:76.53,status:"known"}));
test("placeholder propagates and unknown is never zero",()=>{assert.equal(calculateHorsemanScore(aspects([10,20,30,40,50],"placeholder")).status,"placeholder");assert.deepEqual(calculateHorsemanScore(aspects([10,null,30,40,50])),{score:null,status:"unknown"})});
test("historical means derive only at matching years",()=>{const result=calculateHistoricalScores([[{year:2000,score:10,status:"known",methodologyVersion:"v1"}],[{year:2000,score:30,status:"known",methodologyVersion:"v1"}]]);assert.equal(result[0].score,20)});
