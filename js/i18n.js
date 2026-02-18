/**
 * i18n for Équipe William — browser language detection + language toggle
 * Usage: elements with data-i18n="key" get text from translations[lang][key]
 *        elements with data-i18n-html="key" get innerHTML from translations[lang][key]
 */
(function() {
    var STORAGE_KEY = 'equipewilliam-lang';

    var translations = {
        fr: {
            // Meta (updated via JS)
            metaTitle: "Équipe William — Immobilier de Luxe & Stratégies de Vente",
            metaDescription: "Équipe William : Courtiers immobiliers agréés spécialisés dans l'immobilier de luxe et résidentiel à Montréal, Laval et sur la Rive-Nord. Maximisez la valeur de votre propriété.",
            // Nav
            navHome: "Accueil",
            navProperties: "propriétés",
            navAbout: "À propos",
            navTeam: "L'Équipe",
            navSold: "Vendus",
            navTestimonials: "Témoignages",
            navContact: "Nous contacter",
            langLabel: "Langue",
            // Hero
            heroTagline: "Vendre en toute confiance",
            heroTitle1: "L'ÉQUIPE WILLIAM",
            heroTitle2: "VENDRE SANS COMPROMIS",
            heroDesc: "Confier votre propriété à notre équipe, c'est choisir une mise en marché d'exception et un accompagnement sans faille pour réaliser votre transaction aux meilleures conditions.",
            heroCta: "Demander une évaluation gratuite",
            attrRigueur: "Rigueur",
            attrRigueurSub: "Gestion impeccable",
            attrTransparence: "Transparence",
            attrTransparenceSub: "Communication continue",
            attrPerformance: "Performance",
            attrPerformanceSub: "Résultats concrets",
            // About
            aboutLabel: "Notre Philosophie",
            aboutTitle1: "L'IMMOBILIER",
            aboutTitle2: "SANS STRESS.",
            aboutP1: "Chez Équipe William, nous croyons que vendre ou acheter une propriété est l'une des transitions les plus importantes de votre vie. C'est pourquoi nous avons banni l'approche \"taille unique\".",
            aboutP2: "Notre force réside dans l'équilibre parfait entre une analyse de marché rigoureuse et une stratégie marketing audacieuse. Nous ne nous contentons pas de mettre une pancarte; nous créons un engouement, nous valorisons chaque détail et nous négocions avec une fermeté inébranlable pour défendre vos intérêts.",
            aboutQuote: "\"L'excellence n'est pas un acte, c'est une habitude. Nous visons la perfection à chaque étape.\"",
            seeProperties: "Voir nos propriétés",
            statTransactions: "Transactions par année",
            statVolume: "Volume en 2025",
            aboutQuote2: "\"Une équipe dévouée qui transforme les défis immobiliers en succès retentissants.\"",
            // Team
            teamLabel: "Notre Équipe",
            teamTitle: "NOS EXPERTS",
            teamSub: "Une approche analytique et humaine pour des résultats exceptionnels.",
            founder: "Fondateur",
            partner: "Partenaire",
            williamRole: "Courtier Immobilier",
            williamBio: "Expert du marché, William allie une analyse rigoureuse des données à une compréhension intuitive des besoins de ses clients.",
            camilleRole: "Courtière Immobilière",
            camilleBio: "Spécialiste de la négociation et du home staging, Camille transforme chaque visite en coup de cœur. Sa vision esthétique est un atout majeur.",
            learnMore: "En savoir plus",
            // Map
            mapLabel: "Portfolio",
            mapTitle: "PROPRIÉTÉS VENDUES",
            mapDesc: "Explorez nos succès récents à travers Montréal. Chaque point sur la carte représente une stratégie gagnante et un client satisfait.",
            mapSold: "VENDU",
            // Testimonials
            testimonialsTitle: "CE QUE DISENT NOS CLIENTS",
            testimonial1: "\"Oh que oui la famille !!!!! Merci du fond du cœur pour ton accompagnement exceptionnel. Ton professionnalisme n'a d'égal que ta gentillesse. Un courtier en or, vraiment inoubliable. Merci will\"",
            testimonial2: "\"William, que dire de ce courtier ? En un mot : \"wow\". Passionné, humain, énergique, à l'écoute... Une première expérience pour moi qui s'est avérée un franc succès. 100% confiance en lui, un travail impeccable !\"",
            testimonial3: "\"William a été très présent à chaque étape de la vente de mon condo. Sympathique, courtois et dédié, il a répondu à toutes mes questions. J'ai vendu 2 propriétés avec lui et je le recommande sans hésiter !\"",
            googleReview: "Avis Google",
            shareExperience: "Partagez votre expérience",
            // Contact
            contactLabel: "Parlons de votre projet",
            contactTitle: "CONTACTEZ-NOUS",
            contactIntro: "Que vous cherchiez à vendre ou à acheter, nous sommes prêts à vous écouter. Remplissez le formulaire et nous vous répondrons sous 24h.",
            contactOffice: "Bureau",
            contactPhone: "Téléphone",
            contactEmail: "Courriel",
            contactAddress: "Bureau #200\n3891 A. des Laurentides E\nLaval, QC H7L 3H7",
            formFirstname: "Prénom",
            formLastname: "Nom",
            formEmail: "Courriel",
            formProjectType: "Type de projet",
            formOptionSell: "Je veux vendre une propriété",
            formOptionBuy: "Je veux acheter une propriété",
            formOptionInfo: "Demande d'information",
            formMessage: "Message",
            formSend: "Envoyer le message",
            formPlaceholderFirst: "John",
            formPlaceholderLast: "Doe",
            formPlaceholderEmail: "john@exemple.com",
            formPlaceholderMessage: "Dites-nous en plus sur votre projet...",
            // Footer
            footerTagline: "L'immobilier repensé pour ceux qui exigent l'excellence et la transparence.",
            footerNav: "Navigation",
            footerHome: "Accueil",
            footerTeam: "Équipe",
            footerSold: "Vendus",
            footerServices: "Services",
            footerBuy: "Achat immobilier",
            footerSell: "Vente & Marketing",
            footerInvest: "Investissement",
            footerContact: "Contact",
            footerCopyright: "© 2026 Équipe William.",
            footerWebDesign: "Conception web par",
            // William page
            backHome: "Retour à l'accueil",
            workWithWilliam: "Travailler avec William",
            williamMetaTitle: "William Latreille — Courtier Immobilier Agréé",
            williamRoleLabel: "Courtier Immobilier",
            williamIntro: "Fondateur d'Équipe William. Reconnu pour son énergie inépuisable, sa transparence totale et sa capacité à conclure les transactions les plus complexes.",
            labelMobile: "Cellulaire",
            labelEmail: "Courriel",
            yearsExp: "Années d'expérience",
            volume2025: "Volume 2025",
            williamHeadline: "PLUS QU'UN COURTIER, UN PARTENAIRE STRATÉGIQUE.",
            williamP1: "Mon parcours dans l'immobilier a commencé avec une conviction simple : chaque propriété a une histoire unique qui mérite d'être racontée avec passion et précision.",
            williamP2: "Avec plus de 15 ans d'expérience, j'ai développé une méthode de travail qui élimine le stress de l'équation. Je suis obsédé par les détails, la qualité du marketing et la psychologie de la négociation.",
            williamQuote: "\"Pour mes clients, je ne compte pas mes heures. Je suis disponible, réactif et déterminé à obtenir le prix que vous méritez.\"",
            williamP3: "Que ce soit pour une résidence à Laval, un investissement à Montréal ou un projet de vie sur la Rive-Nord, je mets toute la puissance de mon réseau et de mes outils technologiques à votre service.",
            mySpecialties: "Mes Spécialités",
            williamSpec1: "Vente de propriétés résidentielles",
            williamSpec2: "Immobilier de luxe & Prestige",
            williamSpec3: "Investissement multilogements",
            williamSpec4: "Évaluation marchande précise",
            williamSpec5: "Home Staging & Marketing",
            bookMeeting: "Prendre Rendez-vous",
            williamTestimonial: "\"William, que dire de ce courtier ? En un mot : 'wow'. Passionné, humain, énergique, à l'écoute, répond présent pour toutes questions et ce, plus vite que son ombre. Sans lui, je n'y serais pas arrivée, c'est clair.\"",
            clientSeller: "Cliente Vendeuse",
            williamContactTag: "Direct & Rapide",
            williamContactTitle: "DISCUTER AVEC WILLIAM",
            formPlaceholderHelp: "Comment puis-je vous aider ?",
            footerRightsWilliam: "© 2026 William Latreille. Tous droits réservés.",
            footerSoldProperties: "Propriétés Vendues",
            // Camille page
            contactCamille: "Contacter Camille",
            camilleMetaTitle: "Camille Bernier — Courtière Immobilière",
            camilleRoleLabel: "Courtière Immobilière",
            camilleIntro: "Reconnue pour son approche humaine et son œil esthétique. Camille transforme chaque propriété en coup de cœur et guide ses clients avec une empathie rare.",
            labelOffice: "Bureau",
            satisfaction: "Satisfaction",
            camilleHeadline: "L'ART DE VALORISER VOTRE ESPACE.",
            camilleP1: "Mon rôle va bien au-delà de la transaction. Je vois chaque propriété comme un projet unique où le design, l'émotion et la stratégie financière se rencontrent.",
            camilleP2: "Spécialiste du \"Home Staging\" et de la mise en marché, je sais exactement comment présenter votre propriété pour qu'elle déclenche le coup de cœur instantané chez les acheteurs. Mon approche est minutieuse : chaque détail compte.",
            camilleQuote: "\"L'immobilier, c'est avant tout une histoire de confiance. J'accompagne mes clients comme s'il s'agissait de ma propre famille.\"",
            camilleP3: "Que vous soyez un premier acheteur cherchant la perle rare sur le Plateau, ou un vendeur souhaitant maximiser son investissement, je vous guide avec clarté, patience et une énergie communicative.",
            camilleSpec1: "Accompagnement premiers acheteurs",
            camilleSpec2: "Home Staging & Design",
            camilleSpec3: "Marché des Condos (Plateau/Rosemont)",
            camilleSpec4: "Négociation stratégique",
            camilleTestimonial: "\"Camille a su cerner nos besoins dès la première rencontre. Elle nous a trouvé la perle rare sur le Plateau alors qu'elle n'était même pas encore sur le marché. Son écoute a fait toute la différence.\"",
            clientBuyer: "Cliente Acheteuse",
            camilleContactTag: "Une approche humaine",
            camilleContactTitle: "DISCUTER AVEC CAMILLE",
            formPlaceholderProject: "Parlez-moi de votre projet...",
            footerRights: "© 2026 Équipe William. Tous droits réservés."
        },
        en: {
            metaTitle: "Équipe William — Luxury Real Estate & Sales Strategies",
            metaDescription: "Équipe William: Licensed real estate brokers specializing in luxury and residential real estate in Montreal, Laval and the North Shore. Maximize your property's value.",
            navHome: "Home",
            navProperties: "Properties",
            navAbout: "About",
            navTeam: "Team",
            navSold: "Sold",
            navTestimonials: "Testimonials",
            navContact: "Contact us",
            langLabel: "Language",
            heroTagline: "Sell with confidence",
            heroTitle1: "L'ÉQUIPE WILLIAM",
            heroTitle2: "SELL WITHOUT COMPROMISE",
            heroDesc: "Entrusting your property to our team means choosing an exceptional market launch and flawless support to complete your transaction under the best conditions.",
            heroCta: "Request a free evaluation",
            attrRigueur: "Rigor",
            attrRigueurSub: "Impeccable management",
            attrTransparence: "Transparency",
            attrTransparenceSub: "Ongoing communication",
            attrPerformance: "Performance",
            attrPerformanceSub: "Concrete results",
            aboutLabel: "Our Philosophy",
            aboutTitle1: "REAL ESTATE",
            aboutTitle2: "STRESS-FREE.",
            aboutP1: "At Équipe William, we believe that selling or buying a property is one of the most important transitions in your life. That's why we've banished the one-size-fits-all approach.",
            aboutP2: "Our strength lies in the perfect balance between rigorous market analysis and bold marketing strategy. We don't just put up a sign; we create buzz, we enhance every detail and we negotiate with unwavering firmness to protect your interests.",
            aboutQuote: "\"Excellence is not an act, but a habit. We aim for perfection at every step.\"",
            seeProperties: "View our properties",
            statTransactions: "Transactions per year",
            statVolume: "Volume in 2025",
            aboutQuote2: "\"A dedicated team that turns real estate challenges into resounding success.\"",
            teamLabel: "Our Team",
            teamTitle: "OUR EXPERTS",
            teamSub: "An analytical and human approach for exceptional results.",
            founder: "Founder",
            partner: "Partner",
            williamRole: "Real Estate Broker",
            williamBio: "A market expert, William combines rigorous data analysis with an intuitive understanding of his clients' needs.",
            camilleRole: "Real Estate Broker",
            camilleBio: "Specialist in negotiation and home staging, Camille turns every viewing into a love-at-first-sight moment. Her aesthetic vision is a major asset.",
            learnMore: "Learn more",
            mapLabel: "Portfolio",
            mapTitle: "SOLD PROPERTIES",
            mapDesc: "Explore our recent successes across Montreal. Each point on the map represents a winning strategy and a satisfied client.",
            mapSold: "SOLD",
            testimonialsTitle: "WHAT OUR CLIENTS SAY",
            testimonial1: "\"Oh yes, the family!!!! Thank you from the bottom of my heart for your exceptional support. Your professionalism is matched only by your kindness. A broker in a million, truly unforgettable. Thank you Will\"",
            testimonial2: "\"William, what can I say about this broker? In one word: 'wow'. Passionate, human, energetic, attentive... A first experience for me that turned out to be a resounding success. 100% trust in him, impeccable work!\"",
            testimonial3: "\"William was very present at every step of the sale of my condo. Friendly, courteous and dedicated, he answered all my questions. I've sold 2 properties with him and I recommend him without hesitation!\"",
            googleReview: "Google Review",
            shareExperience: "Share your experience",
            contactLabel: "Let's talk about your project",
            contactTitle: "CONTACT US",
            contactIntro: "Whether you're looking to sell or buy, we're ready to listen. Fill out the form and we'll get back to you within 24 hours.",
            contactOffice: "Office",
            contactPhone: "Phone",
            contactEmail: "Email",
            contactAddress: "Office #200\n3891 A. des Laurentides E\nLaval, QC H7L 3H7",
            formFirstname: "First name",
            formLastname: "Last name",
            formEmail: "Email",
            formProjectType: "Project type",
            formOptionSell: "I want to sell a property",
            formOptionBuy: "I want to buy a property",
            formOptionInfo: "Information request",
            formMessage: "Message",
            formSend: "Send message",
            formPlaceholderFirst: "John",
            formPlaceholderLast: "Doe",
            formPlaceholderEmail: "john@example.com",
            formPlaceholderMessage: "Tell us more about your project...",
            footerTagline: "Real estate reimagined for those who demand excellence and transparency.",
            footerNav: "Navigation",
            footerHome: "Home",
            footerTeam: "Team",
            footerSold: "Sold",
            footerServices: "Services",
            footerBuy: "Real estate purchase",
            footerSell: "Sale & Marketing",
            footerInvest: "Investment",
            footerContact: "Contact",
            footerCopyright: "© 2026 Équipe William.",
            footerWebDesign: "Web design by",
            // William page
            backHome: "Back to home",
            workWithWilliam: "Work with William",
            williamMetaTitle: "William Latreille — Licensed Real Estate Broker",
            williamRoleLabel: "Real Estate Broker",
            williamIntro: "Founder of Équipe William. Known for his boundless energy, total transparency and ability to close the most complex transactions.",
            labelMobile: "Mobile",
            labelEmail: "Email",
            yearsExp: "Years of experience",
            volume2025: "Volume 2025",
            williamHeadline: "MORE THAN A BROKER, A STRATEGIC PARTNER.",
            williamP1: "My journey in real estate began with a simple belief: every property has a unique story that deserves to be told with passion and precision.",
            williamP2: "With over 15 years of experience, I've developed a working method that removes stress from the equation. I'm obsessed with details, marketing quality and the psychology of negotiation.",
            williamQuote: "\"For my clients, I don't count the hours. I'm available, responsive and determined to get you the price you deserve.\"",
            williamP3: "Whether it's a residence in Laval, an investment in Montreal or a life project on the North Shore, I put the full power of my network and technology tools at your service.",
            mySpecialties: "My Specialties",
            williamSpec1: "Residential property sales",
            williamSpec2: "Luxury & Prestige real estate",
            williamSpec3: "Multi-unit investment",
            williamSpec4: "Accurate market evaluation",
            williamSpec5: "Home Staging & Marketing",
            bookMeeting: "Book a meeting",
            williamTestimonial: "\"William, what can I say about this broker? In one word: 'wow'. Passionate, human, energetic, attentive, there for every question and faster than his shadow. Without him, I wouldn't have made it, that's for sure.\"",
            clientSeller: "Seller Client",
            williamContactTag: "Direct & Fast",
            williamContactTitle: "TALK TO WILLIAM",
            formPlaceholderHelp: "How can I help you?",
            footerRightsWilliam: "© 2026 William Latreille. All rights reserved.",
            footerSoldProperties: "Sold Properties",
            // Camille page
            contactCamille: "Contact Camille",
            camilleMetaTitle: "Camille Bernier — Real Estate Broker",
            camilleRoleLabel: "Real Estate Broker",
            camilleIntro: "Known for her human approach and aesthetic eye. Camille turns every property into a love-at-first-sight and guides her clients with rare empathy.",
            labelOffice: "Office",
            satisfaction: "Satisfaction",
            camilleHeadline: "THE ART OF VALUING YOUR SPACE.",
            camilleP1: "My role goes far beyond the transaction. I see each property as a unique project where design, emotion and financial strategy meet.",
            camilleP2: "A specialist in Home Staging and market launch, I know exactly how to present your property so it triggers that instant love-at-first-sight in buyers. My approach is meticulous: every detail counts.",
            camilleQuote: "\"Real estate is first and foremost a matter of trust. I support my clients as if they were my own family.\"",
            camilleP3: "Whether you're a first-time buyer looking for that rare find on the Plateau, or a seller looking to maximize your investment, I guide you with clarity, patience and infectious energy.",
            camilleSpec1: "First-time buyer support",
            camilleSpec2: "Home Staging & Design",
            camilleSpec3: "Condo market (Plateau/Rosemont)",
            camilleSpec4: "Strategic negotiation",
            camilleTestimonial: "\"Camille understood our needs from the very first meeting. She found us the perfect place on the Plateau before it was even on the market. Her listening made all the difference.\"",
            clientBuyer: "Buyer Client",
            camilleContactTag: "A human approach",
            camilleContactTitle: "TALK TO CAMILLE",
            formPlaceholderProject: "Tell me about your project...",
            footerRights: "© 2026 Équipe William. All rights reserved."
        }
    };

    var htmlKeys = ['aboutP1', 'aboutP2']; // keys that may contain HTML; we use textContent for all for safety, so leave empty

    function getStoredLang() {
        try {
            return localStorage.getItem(STORAGE_KEY) || null;
        } catch (e) {
            return null;
        }
    }

    function getBrowserLang() {
        var n = navigator;
        var lang = (n.language || n.userLanguage || '').toLowerCase();
        if (lang.indexOf('en') === 0) return 'en';
        return 'fr';
    }

    function getLang() {
        return getStoredLang() || getBrowserLang();
    }

    function setLang(lang) {
        if (lang !== 'fr' && lang !== 'en') lang = 'fr';
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (e) {}
        document.documentElement.lang = lang;
        applyTranslations(lang);
        updateToggle(lang);
        var t = translations[lang];
        if (t) {
            var page = document.body && document.body.getAttribute('data-page');
            if (page === 'william' && t.williamMetaTitle) document.title = t.williamMetaTitle;
            else if (page === 'camille' && t.camilleMetaTitle) document.title = t.camilleMetaTitle;
            else if (t.metaTitle) document.title = t.metaTitle;
            var metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc && t.metaDescription) metaDesc.setAttribute('content', t.metaDescription);
        }
    }

    function applyTranslations(lang) {
        var t = translations[lang];
        if (!t) return;

        document.querySelectorAll('[data-i18n]').forEach(function(el) {
            var key = el.getAttribute('data-i18n');
            if (t[key] != null) el.textContent = t[key];
        });
        document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
            var key = el.getAttribute('data-i18n-html');
            if (t[key] != null) el.innerHTML = t[key];
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
            var key = el.getAttribute('data-i18n-placeholder');
            if (t[key] != null) el.placeholder = t[key];
        });

        // Select options (by value or index)
        var selectType = document.querySelector('select[name="type"]');
        if (selectType && t.formOptionSell && t.formOptionBuy && t.formOptionInfo) {
            var opts = selectType.querySelectorAll('option');
            if (opts.length >= 3) {
                opts[0].textContent = t.formOptionSell;
                opts[1].textContent = t.formOptionBuy;
                opts[2].textContent = t.formOptionInfo;
            }
        }
    }

    function updateToggle(lang) {
        document.querySelectorAll('[data-lang-toggle]').forEach(function(btn) {
            var target = btn.getAttribute('data-lang-toggle');
            btn.classList.toggle('font-bold', target === lang);
            btn.classList.toggle('opacity-100', target === lang);
            btn.classList.toggle('opacity-60', target !== lang);
        });
    }

    function init() {
        var lang = getLang();
        document.documentElement.lang = lang;
        setLang(lang); // applies translations and meta

        document.querySelectorAll('[data-lang-switch]').forEach(function(btn) {
            btn.addEventListener('click', function() {
                var target = btn.getAttribute('data-lang-switch');
                if (target === 'fr' || target === 'en') setLang(target);
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.i18n = { getLang: getLang, setLang: setLang };
})();
