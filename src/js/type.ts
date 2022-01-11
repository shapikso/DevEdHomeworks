  export type TDataResult = {
      result : Tres
  }
  
  type Tres = {
      data : {
          id: number,
          idLeague: number,
          leagueName: string,
          start: number,
          end: number
  }
  }
  
  export type TError = {
      error: string
  }
  
  export type TSeason = {
      error?: TError,
      result?: TSeasons
  }
  
  export type TSeasonMatches = {
      error?: TError,
      result?: TMatches
  }
  export type TMatche = {
      error?: TError,
      result?: TMatch
  }
  
  type TQuery = {
      apikey: string,
      league_id: string
      }
  
   
  export type TSeasons = {
          season_id: number,
          name: string,
          is_current: number,
          country_id: number,
          league_id: number,
          start_date: string,
          end_date: string
      }


  type TCountry = {
      "team_id": number,
      "name": string,
      "short_code": string,
      "common_name": string,
      "logo": string,
      "country": {
          "country_id": number,
          "name": string,
          "country_code": string,
          "continent": string
      }
  }
  
  export type TMatch = {
      match_id: number,
      status_code: number,
      status: 'finished' | "",
      "match_start": string,
      "match_start_iso": string,
      "minute": null | number,
      "league_id": number,
      "season_id": number,
      "stage": {
          "stage_id": number,
          "name": string
      },
      "group": {
          "group_id": number,
          "group_name": string
      },
      "round": {
          "round_id": number,
          "name": "1",
          "is_current": number | null
      },
      "referee_id": number,
      "home_team": TCountry
      "away_team": TCountry,
      "stats": {
          "home_score": number,
          "away_score": number,
          "ht_score": null | string,
          "ft_score": null | string,
          "et_score": null | string,
          "ps_score": null | string
      },
      "venue": {
          "venue_id": number,
          "name": string,
          "capacity": number,
          "city": string,
          "country_id": number
      }
  }
  
  type TMatches = {
      query: TQuery,
      data: TMatch
          
  }
  
  export type TMatchesQuery = {
      seasonId: number
    }
  export type TMatcheQuery = {
      matchId: number
    }