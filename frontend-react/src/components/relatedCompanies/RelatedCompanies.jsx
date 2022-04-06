import React from 'react';
import './RelatedCompanies.css';
import '../../styles/global.css';

function RelatedCompanies() {

    return (
        <section id="related-companies">

            <h1>Related Companies</h1>

            <div id="company-cards">

                <div className="company-card-item">

                    <div className="company-image">
                        <a href="https://radioaalesund.no/" target="_blank" rel="noreferrer">
                            <img src={ "/images/radio.png" } alt="radio Alesund"/>
                        </a>
                    </div>
                    <div className="company-parah">
                        <p>
                            Radio Ålesund sender live fra bystudioet i Ålesund sentrum hver eneste dag,
                            og gir deg alt du trenger av lokale nyheter, sport, vær,
                            trafikk og reportasjer i tillegg til favorittmusikken din på løpende bånd.
                            Hos oss får du en unik miks av de nyeste hitlåtene,
                            blandet sammen med gode gamle klassikere.
                        </p>
                    </div>

                </div>


                <div className="company-card-item">
                    <div className="company-image">
                        <a href="https://smp.no/" target="_blank" rel="noreferrer">
                            <img src={ "/images/smp.png" } alt="smp"/>
                        </a>
                    </div>
                    <div className="company-parah">
                        <p>
                            Radio Ålesund sender live fra bystudioet i Ålesund sentrum hver eneste dag,
                            og gir deg alt du trenger av lokale nyheter, sport, vær,
                            trafikk og reportasjer i tillegg til favorittmusikken din på løpende bånd.
                            Hos oss får du en unik miks av de nyeste hitlåtene,
                            blandet sammen med gode gamle klassikere.
                        </p>
                    </div>
                </div>

                <div className="company-card-item">
                    <div className="company-image">
                        <a href="https://tv.nrk.no/" target="_blank" rel="noreferrer">
                            <img src={ "/images/nrktv.png" } alt="nrk tv"/>
                        </a>
                    </div>

                    <div className="company-parah">
                        <p>
                            Radio Ålesund sender live fra bystudioet i Ålesund sentrum hver eneste dag,
                            og gir deg alt du trenger av lokale nyheter, sport, vær,
                            trafikk og reportasjer i tillegg til favorittmusikken din på løpende bånd.
                            Hos oss får du en unik miks av de nyeste hitlåtene,
                            blandet sammen med gode gamle klassikere.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RelatedCompanies;
