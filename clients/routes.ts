const routes = {
  monitoring: 'https://api.uptimerobot.com/v2/getMonitors',
  ban: 'https://api-adresse.data.gouv.fr/search/?q=',
  rnm: `https://api-rnm.artisanat.fr/v2/entreprises/`,
  rna: {
    id: `https://entreprise.data.gouv.fr/api/rna/v1/id/`,
    siren: `https://entreprise.data.gouv.fr/api/rna/v1/siret/`,
  },
  rncs: {
    portail: {
      entreprise: 'https://data.inpi.fr/entreprises/',
      login: 'https://data.inpi.fr/login',
    },
    api: {
      login: 'https://opendata-rncs.inpi.fr/services/diffusion/login',
      imr: {
        find: 'https://opendata-rncs.inpi.fr/services/diffusion/imrs-saisis/find?siren=',
        get: 'https://opendata-rncs.inpi.fr/services/diffusion/imrs-saisis/get?listeSirens=',
      },
    },
  },
  bodacc: {
    ods: {
      search:
        'https://bodacc-datadila.opendatasoft.com/api/records/1.0/search/?dataset=annonces-commerciales',
      metadata:
        'https://bodacc-datadila.opendatasoft.com/api/datasets/1.0/search/?q=annonces-commerciales',
    },
    site: {
      recherche: 'https://www.bodacc.fr/annonce/liste/',
      annonce: 'https://www.bodacc.fr/annonce/detail-annonce/',
    },
  },
  journalOfficielAssociations: {
    ods: {
      search:
        'https://journal-officiel-datadila.opendatasoft.com/api/records/1.0/search/?dataset=jo_associations',
      metadata:
        'https://journal-officiel-datadila.opendatasoft.com/api/datasets/1.0/search/?q=jo_associations',
    },
    site: {
      recherche: 'https://www.journal-officiel.gouv.fr/associations/recherche/',
      justificatif:
        'https://www.journal-officiel.gouv.fr/document/associations_b/',
    },
  },
  sireneInsee: {
    siren: 'https://api.insee.fr/entreprises/sirene/V3/siren/',
    siret: 'https://api.insee.fr/entreprises/sirene/V3/siret/',
    siege:
      'https://api.insee.fr/entreprises/sirene/V3/siret?q=etablissementSiege:true%20AND%20siren:',
    siretBySiren: 'https://api.insee.fr/entreprises/sirene/V3/siret?q=siren:',
    auth: 'https://api.insee.fr/token',
    avis: 'https://avis-situation-sirene.insee.fr/AvisPdf.action',
  },
  sireneOuverte: {
    etablissement: `http://annuaire-entreprises.dataeng.etalab.studio/siret?q=`,
    uniteLegale: `http://annuaire-entreprises.dataeng.etalab.studio/siren?q=`,
    rechercheUniteLegale: `http://annuaire-entreprises.dataeng.etalab.studio/search`,
  },
  conventionCollectives: {
    api: 'https://siret2idcc.fabrique.social.gouv.fr/api/v2/',
    site: 'https://code.travail.gouv.fr/outils/convention-collective',
  },
};

export default routes;
