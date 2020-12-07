import { generatePagePath } from '../utils/formatting';
import routes, {
  getSearchUniteLegaleRoute,
  getUniteLegaleRoute,
} from './routes';
import { isSirenOrSiret, libelleFromCodeNaf } from '../utils/helper';

export interface Etablissement {
  siren: string;
  siret: string;
  nic: string;
  etat_administratif_etablissement: 'A' | null;
  date_creation: string;
  geo_adresse: string;
  etablissement_siege: string;
  activite_principale: string;
  date_mise_a_jour: string;
  libelle_activite_principale: string;
  is_siege: '1' | null;
  tranche_effectif_salarie: string;
  latitude: string;
  longitude: string;
  // old API
  tranche_effectifs: string;
  etat_administratif: 'A' | null;
  date_dernier_traitement: string;
}

export interface UniteLegale {
  siren: string;
  etablissement_siege: Etablissement;
  categorie_juridique: string;
  etablissements: Etablissement[];
  date_creation: string;
  date_mise_a_jour: string;
  statut_diffusion: string;
  nom_complet: string;
  page_path: string;
  tranche_effectif_salarie_entreprise: string;
}

export interface ResultUniteLegale {
  siren: string;
  siret: string;
  etablissement_siege: Etablissement;
  categorie_juridique: string;
  nombre_etablissements: number;
  date_creation: string;
  libelle_activite_principale: string;
  etat_administratif_etablissement: string;
  geo_adresse: string;
  latitude: string;
  longitude: string;
  nom_complet: string;
  page_path: string;
}

export interface SearchResults {
  page: string;
  total_results: number;
  total_pages: number;
  unite_legale: ResultUniteLegale[];
}

const getUniteLegale = async (
  siren: string
): Promise<UniteLegale | undefined> => {
  if (!isSirenOrSiret(siren)) {
    throw new Error(`Ceci n'est pas un numéro SIREN valide : ${siren}`);
  }
  const response = await fetch(getUniteLegaleRoute(siren));
  if (response.status === 404) {
    return undefined;
  }
  const uniteLegale = (await response.json())[0].unite_legale[0];

  if (!uniteLegale) {
    return undefined;
  }

  const siege = uniteLegale.etablissement_siege[0];

  if (!siege.is_siege) {
    throw new Error(`Etablissement siege is not siege : ${siren}`);
  }

  const listOfEtablissement = uniteLegale.etablissements;

  if (!listOfEtablissement || listOfEtablissement.length === 0) {
    throw new Error(`No etablissements found`);
  }

  const {
    date_creation,
    date_mise_a_jour,
    tranche_effectif_salarie_entreprise,
  } = uniteLegale;

  const {
    statut_diffusion = null,
    nature_juridique_entreprise = null,
    nombre_etablissements,
    nom_complet = null,
  } = siege;

  const unite_legale = {
    siren,
    etablissement_siege: siege,
    categorie_juridique: nature_juridique_entreprise,
    tranche_effectif_salarie_entreprise,
    etablissements: listOfEtablissement,
    statut_diffusion,
    nombre_etablissements,
    nom_complet,
    page_path: generatePagePath(nom_complet, siren),
    date_creation,
    date_mise_a_jour,
  } as UniteLegale;

  return unite_legale;
};

const getEtablissement = async (
  siret: string
): Promise<Etablissement | undefined> => {
  if (!isSirenOrSiret(siret)) {
    throw new Error(`Ceci n'est pas un numéro SIRET valide : ${siret}`);
  }
  const response = await fetch(`${routes.etablissement}${encodeURI(siret)}`);
  if (response.status === 404) {
    return undefined;
  }
  const { etablissement } = await response.json();
  return etablissement as Etablissement;
};

const getResults = async (
  searchTerms: string,
  page: string
): Promise<SearchResults | undefined> => {
  const response = await fetch(getSearchUniteLegaleRoute(searchTerms, page));

  if (response.status === 404) {
    return undefined;
  }

  const results = (await response.json()) || [];
  const { total_results = 0, total_pages = 0, unite_legale } = results[0];

  return ({
    page,
    total_results,
    total_pages,
    unite_legale: (unite_legale || []).map((result: any) => {
      return {
        ...result,
        nombre_etablissements: result.nombre_etablissements || 1,
        page_path: generatePagePath(result.nom_complet, result.siren),
        libelle_activite_principale: libelleFromCodeNaf(
          result.activite_principale
        ),
      } as ResultUniteLegale;
    }),
  } as unknown) as SearchResults;
};

export { getEtablissement, getUniteLegale, getResults };
