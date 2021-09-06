import React from 'react';
import constants from '../../constants';
import { IEtablissement, IUniteLegale } from '../../models';
import { EAdministration } from '../../models/administration';
import { formatSiret } from '../../utils/helpers/siren-and-siret';
import { libelleFromCodeNaf } from '../../utils/labels';
import IsActiveTag from '../is-active-tag';
import PageCounter from '../results-page-counter';
import { Section } from '../section';
import { FullTable } from '../table/full';
import { Tag } from '../tag';

const EtablissementListeSection: React.FC<{
  uniteLegale: IUniteLegale;
}> = ({ uniteLegale }) => {
  const etablissementsPerPage = constants.resultsPerPage.etablissements;
  return (
    <div id="etablissements">
      <p>
        Cette entité possède{' '}
        {uniteLegale.nombreEtablissements || uniteLegale.etablissements.length}{' '}
        établissement(s) :
      </p>
      <Section
        title="La liste des établissements de l’entité"
        source={EAdministration.INSEE}
      >
        <FullTable
          head={['SIRET', 'Activité (NAF/APE)', 'Adresse', 'Statut']}
          body={uniteLegale.etablissements.map(
            (etablissement: IEtablissement) => [
              //eslint-disable-next-line
              <a href={`/etablissement/${etablissement.siret}`}>
                {formatSiret(etablissement.siret)}
              </a>,
              <>{libelleFromCodeNaf(etablissement.activitePrincipale)}</>,
              etablissement.adresse,
              <>
                {!uniteLegale.estDiffusible ? (
                  <Tag>non-diffusible</Tag>
                ) : (
                  <>
                    {etablissement.estSiege && <Tag>siège social</Tag>}
                    {!etablissement.estActif && (
                      <IsActiveTag isActive={etablissement.estActif} />
                    )}
                  </>
                )}
              </>,
            ]
          )}
        />
        {uniteLegale.nombreEtablissements > etablissementsPerPage && (
          <PageCounter
            currentPage={uniteLegale.currentEtablissementPage || 1}
            totalPages={Math.ceil(
              uniteLegale.nombreEtablissements / etablissementsPerPage
            )}
          />
        )}
      </Section>
    </div>
  );
};
export default EtablissementListeSection;
