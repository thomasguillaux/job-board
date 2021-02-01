import Job from './Job'

const Jobs = () => {
    return (
        <div className="jobs">
            <Job 
                className="red"
                jobTitle={"Full Time Sales Associate"}
                contractType ="CDI"
                country="Australie"
                city="Sidney"
                date="Jan, 2nd"
                company="SAP"/>
            <Job 
                className="green"
                jobTitle="Agent de Sécurité"
                contractType ="CDI"
                country="France"
                city="Bordeaux"
                date="Jan, 7th"
                company="Microsoft"/>
            <Job 
                className="yellow"
                jobTitle="Responsable d'Atelier"
                contractType ="CDD"
                country="Pays-Bas"
                city="Amsterdam"
                date="Jan, 9th"
                company="Google"/>
            <Job 
            className="blue"
            jobTitle="Back-End Developer"
            contractType ="Stage"
            country="Espagne"
            city="Madrid"
            date="Jan, 11th"
            company="Botify"/>
            <Job 
            className="pink"
            jobTitle="Product Owner"
            contractType ="CDI"
            country="Belgique"
            city="Bruxelles"
            date="Jan, 13th"
            company="Havas Media"/>
            <Job 
            className="green"
            jobTitle="Senior HR Manager"
            contractType ="CDI"
            country="Portugal"
            city="Lisbonne"
            date="Jan, 13th"
            company="CDiscount"/>
            <Job 
            className="yellow"
            jobTitle="Blockchain Expert"
            contractType ="CDI"
            country="Maroc"
            city="Casablanca"
            date="Jan, 15th"
            company="Crédit Agricole"/>
            <Job 
            className="red"
            jobTitle="CTO"
            contractType ="CDI"
            country="Danemark"
            city="Copenhague"
            date="Jan, 20th"
            company="HSBC"/>
            <Job className="pink"
            jobTitle="Project Manager"
            contractType ="CDD"
            country="Albanie"
            city="Tirana"
            date="Jan, 20th"
            company="Nike"/>
        </div>
    );
};

export default Jobs;