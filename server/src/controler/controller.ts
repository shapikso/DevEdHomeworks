import { string } from 'joi';
import { getSeason, getSeasonMatches,getMatchByid } from '../request/request'
import { TMatcheQuery, TMatchesQuery } from '../type';
import { matchesValidation, matchValidation } from './validation/uni.validator';

async function getSeasonsData ()  {
    const { error: dbError , result} = await getSeason();
    if (result){ console.log(result.data); }
    
    if (dbError) return { error: { status: 500, data: { error: string } } };
    return { result: { data: result, status: 200 } };
  };

async function getMatches (query: TMatchesQuery)  {
    const { value, error } = matchesValidation.validate(query,{ abortEarly: false });
    if (error) return { error: {status: 400, data: error.message} };
    
    const { error: dbError , result} = await getSeasonMatches(value.seasonId);
    if (result){ console.log(result.data); }
    
    if (dbError) return { error: { status: 500, data: { error: string } } };
    return { result: { data: result, status: 200 } };
  };

async function getMatch (query: TMatcheQuery)  {
    const { value, error } = matchValidation.validate( query, { abortEarly: false });
    if (error) return { error: {status: 400, data: error.message} };
    
    const { error: dbError , result} = await getMatchByid(value.matchId);
    if (result){ console.log(result); }
    
    if (dbError) return { error: { status: 500, data: { error: string } } };
    return { result: { data: result, status: 200 } };
  };
  
  module.exports = { getSeasonsData, getMatches, getMatch };
