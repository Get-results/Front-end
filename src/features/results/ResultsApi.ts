import type {ResultsEntity} from './ResultsEntity';
import mockResults from '../../../public/resultsMock.json';

// const URL_BACKEND = 'http://localhost:8081/getresults/getmatchsresults';
const URL_BACKEND = 'http://localhost:3000/resultsMock.json'

/**
 * Récupère la liste des résultats depuis l'API
 * @returns {Promise<ResultsEntity[]>} Un tableau de résultats correspondant à l'entité définie
 */

export async function fetchResults(): Promise<ResultsEntity[]> {
    try {
        // const response = await fetch(URL_BACKEND);
        // if (!response.ok) {
        //     throw new Error(`Erreur lors de la récupération des résultats : ${response.statusText}`);
        // }
        //  const data = await response.json();
            const data = mockResults
        console.log(data);

        return data.map((item: any) => ({
            id: item.id || 0,
            date: item.date || "Données manquantes",
            team1Name: item.team1Name || "Données manquantes",
            team1Score: item.team1Score || "Données manquantes",
            team2Name: item.team2Name || "Données manquantes",
            team2Score: item.team2Score || "Données manquantes",
            matchLink: item.matchLink || "Données manquantes",
            competition: item.competition || "Données manquantes",
            day: item.day || "Données manquantes",
        }));
    } catch (error) {
        console.error('Erreur dans fetchResults:', error);
        return [];
    }
}
