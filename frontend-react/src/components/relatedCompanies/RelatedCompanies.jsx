import React from 'react';
import './RelatedCompanies.css';

/**
 * Creates the related companies section.
 * Hard coded as we dont store this in the DB.
 * @returns {JSX.Element}
 * @constructor
 */
function RelatedCompanies() {

    return (
        <section id="related-companies">

            <h1>Related Companies</h1>

            <div id="company-cards">

                <div className="company-card-item">

                    <div className="company-image">
                        <a href="https://radioaalesund.no/" target="_blank" rel="noreferrer">
                            <img src={"/images/squoosed-radio.png"} alt="Radio Aalesund Logo"/>
                        </a>
                    </div>
                    <div className="company-parah">
                        <p>
                            Radio Ålesund broadcasts live from the city studio in the center of Ålesund every single
                            day,
                            and gives you everything you need for local news, sports, weather, traffic and reports in
                            addition
                            to your favorite music on the assembly line. With us you get a unique mix of the latest hit
                            songs, mixed with good old classics.
                        </p>
                    </div>

                </div>


                <div className="company-card-item">
                    <div className="company-image">
                        <a href="https://smp.no/" target="_blank" rel="noreferrer">
                            <img src={"/images/squoosed-smp.jpg"} alt="SMP Logo"/>
                        </a>
                    </div>
                    <div className="company-parah">
                        <p>
                            Sunnmørsposten is a daily newspaper published in Ålesund.
                            Avisa was founded in 1882 and is the dominant newspaper in Sunnmøre and Northwest Norway.
                            Avisa is owned by Polaris Media ASA.
                        </p>
                    </div>
                </div>

                <div className="company-card-item">
                    <div className="company-image">
                        <a href="https://tv.nrk.no/" target="_blank" rel="noreferrer">
                            <img src={"/images/squoosed-nrktv.jpg"} alt="NRK TV Logo"/>
                        </a>
                    </div>

                    <div className="company-parah">
                        <p>
                            Norsk rikskringkasting AS (NRK) fills important social, cultural and democratic needs in
                            Norwegian society through content on the internet, TV and radio.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RelatedCompanies;
