import axios from "axios";
import { TSeason, TSeasonMatches } from "../type";

const apiKey = '58f45070-72c6-11ec-82d3-5d3335e57bac'

export const getSeason = async (): Promise<TSeason> => {
    try {
        const countries = await axios.get(`https://app.sportdataapi.com/api/v1/soccer/seasons?apikey=${apiKey}&league_id=602`)
        return { result: countries.data.data };
    } catch (error) {
        return { error: error.message };
    }
}

export const getSeasonMatches = async (id:number): Promise<TSeasonMatches> => {
    try {
        const countries = await axios.get(`https://app.sportdataapi.com/api/v1/soccer/matches?season_id=${id}&apikey=${apiKey}`)
        return { result: countries.data.data };
    } catch (error) {
        return { error: error.message };
    }
}

export const getMatchByid = async (id:number): Promise<TSeasonMatches> => {
    try {
        const countries = await axios.get(`https://app.sportdataapi.com/api/v1/soccer/matches/${id}?apikey=${apiKey}`)
        return { result: countries.data.data };
    } catch (error) {
        return { error: error.message };
    }
}

