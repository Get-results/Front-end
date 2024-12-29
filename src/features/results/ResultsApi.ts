import type {ResultsEntity} from './ResultsEntity';

const URL_BACKEND = 'http://localhost:8081/getresults/getmatchsresults';

/**
 * Récupère la liste des résultats depuis l'API
 * @returns {Promise<ResultsEntity[]>} Un tableau de résultats correspondant à l'entité définie
 */

export async function fetchResults(): Promise<ResultsEntity[]> {
    try {
        const response = await fetch(URL_BACKEND);

        if (!response.ok) {
            console.error(`Erreur lors de la récupération des résultats : ${response.statusText}`);
            return [];
        }

        return await response.json();

    } catch (error) {
        console.error('Erreur dans fetchResults:', error);
        return [];
    }
}
