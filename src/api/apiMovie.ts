import type { MoviesResponse,IMovie } from "@interfaces/Movie.response";
import type {  TrailersResponse, VideoShort } from "@interfaces/Trailers.response";

const apiKey= import.meta.env.API_KEY;
const baseUrl = "https://api.themoviedb.org/3";
export class ApiMovie {
    
    public static listarPeliculas = async () :Promise<MoviesResponse> => {         
        const response = await fetch(`${baseUrl}/discover/movie?api_key=${apiKey}&language=es&include_image_language=es`);
        const data = await response.json() as MoviesResponse;
        return data    
    }

    public static obtenerPorId = async (id: string) :Promise<IMovie> => { 
      const response = await fetch(`${baseUrl}/movie/${id}?api_key=${apiKey}&language=es`);          
      const data = await response.json() as IMovie;      
      return data;        
    }

    public static obtenerTrailers = async (id: string) :Promise<VideoShort[]> => { 
        const response= await fetch(`${baseUrl}/movie/${id}/videos?api_key=${apiKey}&language=es`);            
        const data = await response.json() as TrailersResponse;
        return data.results.filter(r=> r.type === "Trailer");
    
    }




}

