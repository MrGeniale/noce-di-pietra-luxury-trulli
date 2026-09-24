export interface ContentData {
  nav: {
    story: string;
    spaces: string;
    jacuzzi: string;
    amenities: string;
    gallery: string;
    location: string;
    bookNow: string;
    contact: string;
  };
  hero: {
    tagline: string;
    subtitle: string;
    features: string[];
    bookDirect: string;
    explore: string;
    scrollDown: string;
  };
  bookingBar: {
    checkIn: string;
    checkOut: string;
    guests: string;
    guestCount: (n: number) => string;
    checkAvailability: string;
    whatsappMsg: string;
  };
  about: {
    badge: string;
    title: string;
    lead: string;
    p1: string;
    p2: string;
    quote: string;
    stats: {
      value: string;
      label: string;
    }[];
  };
  spaces: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      id: string;
      title: string;
      tag: string;
      desc: string;
      image: string;
      features: string[];
    }[];
  };
  jacuzzi: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    highlightTitle: string;
    highlightDesc: string;
    features: string[];
  };
  amenities: {
    badge: string;
    title: string;
    subtitle: string;
    list: {
      icon: string;
      title: string;
      desc: string;
    }[];
  };
  gallery: {
    badge: string;
    title: string;
    subtitle: string;
    all: string;
    exterior: string;
    bedroom: string;
    jacuzzi: string;
    living: string;
    details: string;
  };
  location: {
    badge: string;
    title: string;
    subtitle: string;
    desc: string;
    placesTitle: string;
    places: {
      name: string;
      distance: string;
      desc: string;
    }[];
    openInMaps: string;
    address: string;
  };
  directBooking: {
    badge: string;
    title: string;
    subtitle: string;
    desc: string;
    perks: {
      title: string;
      desc: string;
    }[];
    ctaWhatsApp: string;
    ctaBooking: string;
    orBookOn: string;
  };
  reviews: {
    badge: string;
    title: string;
    subtitle: string;
    rating: string;
    basedOn: string;
    items: {
      name: string;
      country: string;
      text: string;
      highlight: string;
    }[];
  };
  footer: {
    desc: string;
    quickLinks: string;
    contacts: string;
    socials: string;
    address: string;
    rights: string;
    designedWith: string;
  };
}

export const content: { it: ContentData; en: ContentData } = {
  it: {
    nav: {
      story: 'La Dimora',
      spaces: 'Gli Spazi',
      jacuzzi: 'Idromassaggio',
      amenities: 'I Servizi',
      gallery: 'Galleria',
      location: 'Posizione',
      bookNow: 'Prenota Ora',
      contact: 'Contatti',
    },
    hero: {
      tagline: 'Il Fascino Autentico della Pietra nel Cuore della Valle d’Itria',
      subtitle: 'Benvenuti a Noce di Pietra – Luxury Trulli, un’oasi di charme immersa nella quiete della Valle d’Itria, a pochi minuti da Alberobello.',
      features: ['Vasca Idromassaggio Privata', 'Parcheggio Privato', 'Cucina Attrezzata', 'Wi-Fi Veloce'],
      bookDirect: 'Richiedi Disponibilità su WhatsApp',
      explore: 'Scopri la Dimora',
      scrollDown: 'Scorri per scoprire',
    },
    bookingBar: {
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      guests: 'Ospiti',
      guestCount: (n) => `${n} ${n === 1 ? 'Ospite' : 'Ospiti'}`,
      checkAvailability: 'Verifica su WhatsApp',
      whatsappMsg: 'Salve! Vorrei richiedere informazioni e disponibilità per un soggiorno presso Noce di Pietra Luxury Trulli.',
    },
    about: {
      badge: 'Autentica Puglia & Lusso Discreto',
      title: 'Una Dimora Esclusiva dove il Tempo Rallenta',
      lead: 'Un rifugio unico dove le volte storiche in pietra viva incontrano il design contemporaneo e il massimo comfort.',
      p1: 'Noce di Pietra – Luxury Trulli è situato nella pittoresca campagna della Valle d’Itria, circondato da ulivi secolari e dal silenzio rigenerante della natura pugliese, a pochissimi chilometri dal sito UNESCO di Alberobello e dalle bellezze barocche di Martina Franca.',
      p2: 'Frutto di un restauro conservativo d’eccellenza, ogni cono e ogni arco in pietra calcarea custodisce una storia centenaria, impreziosita da arredi su misura, dettagli in legno di noce, vasca idromassaggio privata e finiture di altissimo pregio pensate per offrirvi un soggiorno indimenticabile.',
      quote: 'L’eleganza autentica della tradizione, la pace della natura incontaminata.',
      stats: [
        { value: '5 min', label: 'Da Alberobello UNESCO' },
        { value: '100%', label: 'Privacy & Relax Esclusivo' },
        { value: '4 Posti', label: 'Capienza Massima Ospiti' },
        { value: 'Max 40°C', label: 'Vasca Idromassaggio Riscaldata' },
      ],
    },
    spaces: {
      badge: 'Comfort & Raffinatezza',
      title: 'Gli Spazi della Dimora',
      subtitle: 'Interni luminosi ed eleganti con volte a cono in pietra originale e dotazioni all’avanguardia.',
      items: [
        {
          id: 'bedroom',
          title: 'Camera Padronale sotto il Cono',
          tag: 'Suite Matrimoniale',
          desc: 'Un’alcova romantica e accogliente racchiusa sotto la maestosa cupola in pietra. Letto king-size con materasso ortopedico premium, biancheria in puro cotone e illuminazione d’atmosfera calda e rilassante.',
          image: '/images/img_8213.jpg',
          features: ['Letto Matrimoniale King Size', 'Volte in pietra a vista', 'Armadio su misura', 'Climatizzazione autonoma'],
        },
        {
          id: 'living',
          title: 'Soggiorno di Charme con Divano Letto',
          tag: 'Zona Living',
          desc: 'Un ambiente spazioso e luminoso con comodo divano letto matrimoniale per ospitare fino a 4 persone in totale comodità, arricchito da Smart TV e connessione Wi-Fi ultra veloce.',
          image: '/images/img_8207.jpg',
          features: ['Divano Letto Matrimoniale', 'Smart TV Ultra HD', 'Zona pranzo conviviale', 'Illuminazione LED soffusa'],
        },
        {
          id: 'kitchen',
          title: 'Cucina Attrezzata di Design',
          tag: 'Cucina & Breakfast Corner',
          desc: 'Completa di piano cottura a induzione, frigorifero, forno a microonde, macchina del caffè espresso, bollitore e set completo di stoviglie per gustare i sapori della Puglia in piena libertà.',
          image: '/images/img_8210.jpg',
          features: ['Piano cottura completo', 'Macchina espresso con cialde', 'Frigorifero & Freezer', 'Set stoviglie e calici'],
        },
        {
          id: 'garden',
          title: 'Corte Esterna & Giardino Privato',
          tag: 'Outdoor & Solarium',
          desc: 'Un ampio patio esterno privato pavimentato in chianche tradizionali con area relax, lettini prendisole, parcheggio riservato all’interno della proprietà e vasca idromassaggio.',
          image: '/images/img_8196.jpg',
          features: ['Parcheggio privato recintato', 'Area solarium & relax', 'Patio con tavolo all’aperto', 'Panorama sulla Valle d’Itria'],
        },
      ],
    },
    jacuzzi: {
      badge: 'Benessere & Relax Privato',
      title: 'La Vasca Idromassaggio Esclusiva',
      subtitle: 'Immergetevi nel totale relax tra i getti idroterapici e la calda quiete pugliese.',
      description: 'Pensata per regalarvi momenti indimenticabili sotto il cielo stellato della Valle d’Itria o al tramonto. La vasca idromassaggio è ad uso totalmente privato ed esclusivo degli ospiti della dimora.',
      highlightTitle: 'Idroterapia & Cromoterapia',
      highlightDesc: 'Temperatura regolabile per piacevoli immersioni in ogni stagione, getti massaggianti lombari e luci soffuse per serate di puro romanticismo.',
      features: [
        'Uso totalmente privato ed esclusivo',
        'Acqua riscaldata e getti idroterapici regolabili',
        'Cromoterapia d’atmosfera per la sera',
        'Area lounge e lettini a bordo vasca',
      ],
    },
    amenities: {
      badge: 'Tutti i Dettagli per il Tuo Soggiorno',
      title: 'I Servizi Inclusi & Comfort',
      subtitle: 'Ogni elemento è curato per farvi sentire coccolati in un rifugio di quiete e bellezza.',
      list: [
        {
          icon: 'Sparkles',
          title: 'Vasca Idromassaggio Privata',
          desc: 'Riscaldata e ad uso esclusivo, con idroterapia e cromoterapia serale.',
        },
        {
          icon: 'Car',
          title: 'Parcheggio Privato Gratuito',
          desc: 'Ampio parcheggio recintato all’interno della tenuta ad uso esclusivo.',
        },
        {
          icon: 'Wifi',
          title: 'Wi-Fi ad Alta Velocità',
          desc: 'Connessione Internet veloce e stabile in tutta la struttura e all’aperto.',
        },
        {
          icon: 'Flame',
          title: 'Cucina Completa & Attrezzata',
          desc: 'Piano cottura, frigo, microonde, stoviglie e macchina del caffè espresso.',
        },
        {
          icon: 'Wind',
          title: 'Climatizzazione & Riscaldamento',
          desc: 'Controllo indipendente della temperatura per il massimo comfort in ogni stagione.',
        },
        {
          icon: 'Tv',
          title: 'Smart TV Digitale',
          desc: 'Schermo piatto con canali satellitari e streaming per i tuoi momenti di svago.',
        },
        {
          icon: 'Coffee',
          title: 'Welcome Corner & Caffè',
          desc: 'Selezione di cialde caffè, tisane, acqua minerale e prodotti tipici di benvenuto.',
        },
        {
          icon: 'ShieldCheck',
          title: 'Privacy & Tranquillità Totale',
          desc: 'Nessun altro ospite nella tenuta: l’intera struttura è solo per voi.',
        },
      ],
    },
    gallery: {
      badge: 'Scorci d’Autore',
      title: 'Galleria Fotografica',
      subtitle: 'Lasciatevi incantare dall’armonia della pietra, dei coni e dell’atmosfera di Noce di Pietra.',
      all: 'Tutte le Foto',
      exterior: 'Esterni & Trulli',
      bedroom: 'Camera Padronale',
      jacuzzi: 'Idromassaggio & Relax',
      living: 'Soggiorno & Cucina',
      details: 'Dettagli di Charme',
    },
    location: {
      badge: 'Nel Cuore della Puglia',
      title: 'Posizione Strategica in Valle d’Itria',
      subtitle: 'A pochi minuti da Alberobello, Martina Franca e dai borghi più amati della Puglia.',
      desc: 'Noce di Pietra – Luxury Trulli si trova in una posizione strategica e silenziosa nella campagna di Martina Franca, a soli 5,3 km da Alberobello e dal Trullo Sovrano. È il punto di partenza perfetto per esplorare borghi incantati, uliveti e le splendide spiagge dell’Adriatico e dello Ionio.',
      placesTitle: 'Distanze dai Principali Luoghi di Interesse',
      places: [
        { name: 'Alberobello (Patrimonio UNESCO)', distance: '5,3 km / 6 min', desc: 'Capitale mondiale dei Trulli e Trullo Sovrano.' },
        { name: 'Martina Franca', distance: '8 km / 10 min', desc: 'Città d’arte barocca, Festival della Valle d’Itria e cucina tipica.' },
        { name: 'Locorotondo', distance: '7 km / 8 min', desc: 'Uno dei borghi più belli d’Italia con case candide a cummerse.' },
        { name: 'Cisternino & Ostuni', distance: '18 - 28 km', desc: 'I borghi bianchi panoramici e le masserie storiche.' },
        { name: 'Monopoli & Polignano a Mare', distance: '28 - 32 km', desc: 'Il mare cristallino, calette e scogliere famose nel mondo.' },
      ],
      openInMaps: 'Apri su Google Maps',
      address: 'Contrada Noce di Pietra, Martina Franca (TA) / Alberobello (BA), Valle d’Itria, Puglia',
    },
    directBooking: {
      badge: 'Prenotazione Diretta Garantita',
      title: 'Prenota al Miglior Prezzo Garantito',
      subtitle: 'Bypassa le commissioni dei portali: scrivici direttamente su WhatsApp per la tariffa più vantaggiosa e offerte su misura.',
      desc: 'Contattandoci direttamente potrai verificare la disponibilità in tempo reale, concordare orari flessibili di check-in e ricevere consigli personalizzati per il tuo soggiorno.',
      perks: [
        { title: 'Miglior Tariffa Garantita', desc: 'Senza intermediari e senza percentuali di commissione.' },
        { title: 'Contatto Diretto con l’Host', desc: 'Risposta immediata via WhatsApp per ogni richiesta speciale.' },
        { title: 'Flessibilità Check-in / Out', desc: 'Massima disponibilità in base agli orari del tuo viaggio.' },
        { title: 'Welcome Kit Pugliese', desc: 'Piccolo omaggio di benvenuto con delizie del territorio.' },
      ],
      ctaWhatsApp: 'Prenota Subito su WhatsApp',
      ctaBooking: 'Vedi su Booking.com',
      orBookOn: 'Oppure visualizza la scheda ufficiale su',
    },
    reviews: {
      badge: 'Ospitalità d’Eccellenza',
      title: 'L’Esperienza dei Nostri Ospiti',
      subtitle: 'I ricordi di chi ha vissuto la magia di un soggiorno a Noce di Pietra.',
      rating: '10 / 10',
      basedOn: 'Valutazione Eccellente per Posizione, Pulizia e Comfort',
      items: [
        {
          name: 'Marco & Elena',
          country: 'Milano, Italia',
          text: 'Un’esperienza meravigliosa. Il trullo è curato in ogni minimo dettaglio, la vasca idromassaggio la sera con le luci accese è un sogno. A 5 minuti da Alberobello ma immerso nel silenzio totale. Torneremo sicuramente!',
          highlight: 'Trullo impeccabile e idromassaggio da sogno',
        },
        {
          name: 'Sophie & Thomas',
          country: 'Parigi, Francia',
          text: 'Authentic Puglian charm combined with luxury comfort. The stone arches, the comfortable bed, and the private jacuzzi made our holiday unforgettable. Easy communication with the host via WhatsApp!',
          highlight: 'Pure romance and authentic luxury',
        },
        {
          name: 'Alessandro',
          country: 'Roma, Italia',
          text: 'Pulizia impeccabile, arredamento di grandissimo gusto e privacy assoluta. La cucina è super accessoriata e il parcheggio interno è comodissimo. Consigliatissimo per chi cerca qualità vera.',
          highlight: 'Privacy e finiture di altissimo livello',
        },
      ],
    },
    footer: {
      desc: 'Noce di Pietra – Luxury Trulli. Un’oasi esclusiva di fascino e quiete immersa nella Valle d’Itria, a pochi minuti da Alberobello.',
      quickLinks: 'Navigazione',
      contacts: 'Contatti & Prenotazioni',
      socials: 'Seguici sui Social',
      address: 'Martina Franca / Alberobello, Valle d’Itria, Puglia, Italia',
      rights: 'Tutti i diritti riservati.',
      designedWith: 'Noce di Pietra Luxury Trulli – Esperienza di soggiorno esclusiva in Puglia.',
    },
  },
  en: {
    nav: {
      story: 'The Estate',
      spaces: 'Spaces',
      jacuzzi: 'Hot Tub',
      amenities: 'Amenities',
      gallery: 'Gallery',
      location: 'Location',
      bookNow: 'Book Now',
      contact: 'Contact',
    },
    hero: {
      tagline: 'Authentic Stone Heritage in the Heart of Valle d’Itria',
      subtitle: 'Welcome to Noce di Pietra – Luxury Trulli, a charming oasis immersed in the tranquility of Valle d’Itria, just minutes from Alberobello.',
      features: ['Private Jacuzzi Hot Tub', 'Private Parking', 'Equipped Kitchen', 'High-Speed Wi-Fi'],
      bookDirect: 'Request Availability on WhatsApp',
      explore: 'Explore the Estate',
      scrollDown: 'Scroll to explore',
    },
    bookingBar: {
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      guests: 'Guests',
      guestCount: (n) => `${n} ${n === 1 ? 'Guest' : 'Guests'}`,
      checkAvailability: 'Check on WhatsApp',
      whatsappMsg: 'Hello! I would like to check availability and information for a stay at Noce di Pietra Luxury Trulli.',
    },
    about: {
      badge: 'Authentic Puglia & Refined Luxury',
      title: 'An Exclusive Sanctuary Where Time Slows Down',
      lead: 'A bespoke hideaway where historic limestone vaults meet contemporary luxury and total relaxation.',
      p1: 'Noce di Pietra – Luxury Trulli is nestled in the picturesque countryside of Valle d’Itria, surrounded by ancient olive groves and peaceful nature, just a few minutes from the UNESCO World Heritage site of Alberobello and the baroque elegance of Martina Franca.',
      p2: 'The result of a masterful conservative restoration, each cone and stone arch preserves centuries of heritage, upgraded with walnut wood accents, bespoke furnishings, a private hydromassage pool, and luxury comforts designed for an unforgettable holiday.',
      quote: 'The authentic elegance of Puglia tradition, the serenity of untouched nature.',
      stats: [
        { value: '5 min', label: 'From Alberobello UNESCO' },
        { value: '100%', label: 'Exclusive Privacy' },
        { value: '4 Guests', label: 'Maximum Capacity' },
        { value: 'Max 40°C', label: 'Heated Hydromassage Tub' },
      ],
    },
    spaces: {
      badge: 'Comfort & Elegance',
      title: 'The Living Spaces',
      subtitle: 'Luminous and stylish interiors featuring original stone cones and top-tier amenities.',
      items: [
        {
          id: 'bedroom',
          title: 'Master Bedroom under the Cone',
          tag: 'Master Suite',
          desc: 'A romantic, tranquil alcove nestled directly under the grand limestone cone. King-size bed with premium orthopedic mattress, fine Italian linens, and soft ambient lighting.',
          image: '/images/img_8213.jpg',
          features: ['King Size Double Bed', 'Exposed historic stone vaults', 'Custom wardrobe', 'Independent Climate Control'],
        },
        {
          id: 'living',
          title: 'Charming Living Room with Sofa Bed',
          tag: 'Living Area',
          desc: 'Spacious and inviting living salon with a comfortable double sofa bed to accommodate up to 4 guests in absolute style, equipped with Smart TV and high-speed Wi-Fi.',
          image: '/images/img_8207.jpg',
          features: ['Comfortable Double Sofa Bed', 'Ultra HD Smart TV', 'Convivial dining area', 'Warm ambient LED lighting'],
        },
        {
          id: 'kitchen',
          title: 'Designer Fully Equipped Kitchen',
          tag: 'Kitchen & Breakfast Corner',
          desc: 'Equipped with induction cooktop, refrigerator, microwave oven, espresso coffee machine, kettle, and complete dinnerware to enjoy regional gourmet delights at your own pace.',
          image: '/images/img_8210.jpg',
          features: ['Full induction stovetop', 'Espresso machine with pods', 'Refrigerator & Freezer', 'Full tableware & wine glasses'],
        },
        {
          id: 'garden',
          title: 'Private Courtyard & Sun Deck',
          tag: 'Outdoor & Solarium',
          desc: 'A sunlit private terrace paved in traditional Apulian limestone chianche, featuring outdoor lounge areas, sunbeds, private gated parking, and heated hydromassage tub.',
          image: '/images/img_8196.jpg',
          features: ['Gated private parking', 'Sun lounger relaxation zone', 'Al fresco outdoor dining table', 'Valle d’Itria countryside views'],
        },
      ],
    },
    jacuzzi: {
      badge: 'Private Wellness & Spa',
      title: 'Exclusive Hydromassage Hot Tub',
      subtitle: 'Indulge in serene relaxation surrounded by gentle hydrotherapy jets and warm Apulian air.',
      description: 'Designed for unforgettable moments under the starlit sky of Valle d’Itria or during glowing golden sunsets. The hot tub is dedicated entirely to your private, exclusive use.',
      highlightTitle: 'Hydrotherapy & Chromotherapy',
      highlightDesc: 'Custom temperature control for soothing dips in any season, lumbar massaging jets, and atmospheric LED mood lighting.',
      features: [
        '100% Private and exclusive use for your party',
        'Heated water with adjustable therapeutic jets',
        'Evening chromotherapy lighting',
        'Poolside sun loungers & cocktail area',
      ],
    },
    amenities: {
      badge: 'Crafted for Your Utmost Comfort',
      title: 'Included Services & Amenities',
      subtitle: 'Every detail is designed to make you feel pampered in a sanctuary of calm and beauty.',
      list: [
        {
          icon: 'Sparkles',
          title: 'Private Jacuzzi Hot Tub',
          desc: 'Heated and exclusively yours, with therapeutic jets and evening chromotherapy.',
        },
        {
          icon: 'Car',
          title: 'Free Private Gated Parking',
          desc: 'Spacious on-site secure parking within the private gated estate.',
        },
        {
          icon: 'Wifi',
          title: 'High-Speed Wi-Fi',
          desc: 'Fast and reliable Internet access inside the trullo and across outdoor areas.',
        },
        {
          icon: 'Flame',
          title: 'Fully Equipped Kitchen',
          desc: 'Cooktop, fridge, microwave, espresso machine, and complete dinnerware.',
        },
        {
          icon: 'Wind',
          title: 'Air Conditioning & Heating',
          desc: 'Independent climate control for optimal comfort in every season.',
        },
        {
          icon: 'Tv',
          title: 'Smart Digital TV',
          desc: 'Flat screen TV with streaming capabilities and satellite channels.',
        },
        {
          icon: 'Coffee',
          title: 'Welcome Corner & Coffee',
          desc: 'Espresso coffee capsules, teas, mineral water, and local welcome treats.',
        },
        {
          icon: 'ShieldCheck',
          title: 'Complete Privacy & Quiet',
          desc: 'No other guests on the property: the entire estate is exclusively for you.',
        },
      ],
    },
    gallery: {
      badge: 'Visual Experience',
      title: 'Photo Gallery',
      subtitle: 'Experience the magic and architectural beauty of Noce di Pietra Luxury Trulli.',
      all: 'All Photos',
      exterior: 'Exteriors & Trulli',
      bedroom: 'Master Bedroom',
      jacuzzi: 'Hot Tub & Wellness',
      living: 'Living & Kitchen',
      details: 'Charming Details',
    },
    location: {
      badge: 'In the Heart of Puglia',
      title: 'Prime Location in Valle d’Itria',
      subtitle: 'Just minutes away from Alberobello, Martina Franca, and Puglia’s iconic whitewashed towns.',
      desc: 'Noce di Pietra – Luxury Trulli is situated in a tranquil, authentic countryside setting in Martina Franca, only 5.3 km from Alberobello’s Trullo Sovrano. It is the ideal base to explore UNESCO heritage sites, olive groves, and the crystal-clear waters of the Adriatic and Ionian seas.',
      placesTitle: 'Distances to Major Attractions',
      places: [
        { name: 'Alberobello (UNESCO Heritage)', distance: '5.3 km / 6 min', desc: 'World Capital of Trulli and Trullo Sovrano.' },
        { name: 'Martina Franca', distance: '8 km / 10 min', desc: 'Baroque historic center, Valle d’Itria Festival, and culinary heritage.' },
        { name: 'Locorotondo', distance: '7 km / 8 min', desc: 'One of Italy’s most beautiful circular white villages.' },
        { name: 'Cisternino & Ostuni', distance: '18 - 28 km', desc: 'Panoramic white towns and historic olive masserias.' },
        { name: 'Monopoli & Polignano a Mare', distance: '28 - 32 km', desc: 'World-famous cliffs, sea caves, and turquoise beaches.' },
      ],
      openInMaps: 'Open in Google Maps',
      address: 'Contrada Noce di Pietra, Martina Franca (TA) / Alberobello (BA), Valle d’Itria, Puglia, Italy',
    },
    directBooking: {
      badge: 'Direct Booking Guarantee',
      title: 'Book Direct for the Best Guaranteed Rate',
      subtitle: 'Bypass portal commission fees: chat with us directly on WhatsApp for special rates and bespoke offers.',
      desc: 'By booking direct, you get instant availability checks, flexible check-in schedules, and direct assistance from your local host throughout your stay.',
      perks: [
        { title: 'Best Rate Guaranteed', desc: 'Direct pricing without third-party commission fees.' },
        { title: 'Direct Host Contact', desc: 'Instant WhatsApp assistance for any custom request.' },
        { title: 'Flexible Check-in / Out', desc: 'Accommodating arrangements tailored to your travel timing.' },
        { title: 'Complimentary Welcome Kit', desc: 'Curated selection of local Pugliese treats on arrival.' },
      ],
      ctaWhatsApp: 'Book Directly on WhatsApp',
      ctaBooking: 'View on Booking.com',
      orBookOn: 'Or explore our verified listing on',
    },
    reviews: {
      badge: 'Exceptional Hospitality',
      title: 'Guest Testimonials',
      subtitle: 'Memories from guests who experienced the magic of Noce di Pietra.',
      rating: '10 / 10',
      basedOn: 'Exceptional Rating for Location, Cleanliness & Comfort',
      items: [
        {
          name: 'Marco & Elena',
          country: 'Milan, Italy',
          text: 'A wonderful experience. The trullo is curated down to the finest detail, and the private hot tub under the night sky is pure magic. Only 5 minutes from Alberobello yet in complete tranquility. We will definitely return!',
          highlight: 'Impeccable trullo and dreamy hot tub',
        },
        {
          name: 'Sophie & Thomas',
          country: 'Paris, France',
          text: 'Authentic Puglian charm combined with luxury comfort. The stone arches, the comfortable bed, and the private jacuzzi made our holiday unforgettable. Easy communication with the host via WhatsApp!',
          highlight: 'Pure romance and authentic luxury',
        },
        {
          name: 'Alessandro',
          country: 'Rome, Italy',
          text: 'Impeccable cleanliness, great taste in interior design, and absolute privacy. The kitchen is fully equipped and private secure parking is a huge plus. Highly recommended for genuine luxury seekers.',
          highlight: 'Top quality finishes and total privacy',
        },
      ],
    },
    footer: {
      desc: 'Noce di Pietra – Luxury Trulli. An exclusive sanctuary of charm and peace nestled in Valle d’Itria, just minutes from Alberobello.',
      quickLinks: 'Navigation',
      contacts: 'Contact & Reservations',
      socials: 'Follow Our Journey',
      address: 'Martina Franca / Alberobello, Valle d’Itria, Puglia, Italy',
      rights: 'All rights reserved.',
      designedWith: 'Noce di Pietra Luxury Trulli – Exclusive holiday experience in Puglia.',
    },
  },
};

export const galleryImages = [
  {
    id: 1,
    src: '/images/img_8196.jpg',
    category: 'exterior',
    title: { it: 'Vista Panoramica dei Trulli', en: 'Panoramic View of the Trulli' },
    subtitle: { it: 'Esterni e corte in pietra calcarea', en: 'Limestone courtyard & cones' },
  },
  {
    id: 2,
    src: '/images/img_8213.jpg',
    category: 'bedroom',
    title: { it: 'Suite Padronale sotto la Volta', en: 'Master Suite under the Vault' },
    subtitle: { it: 'Letto matrimoniale king-size', en: 'King-size luxury bed' },
  },
  {
    id: 3,
    src: '/images/img_8224.jpg',
    category: 'jacuzzi',
    title: { it: 'Vasca Idromassaggio Notturna', en: 'Illuminated Night Hot Tub' },
    subtitle: { it: 'Relax sotto le stelle con cromoterapia', en: 'Starlit relaxation with chromotherapy' },
  },
  {
    id: 4,
    src: '/images/img_8207.jpg',
    category: 'living',
    title: { it: 'Zona Living con Divano Letto', en: 'Living Area with Sofa Bed' },
    subtitle: { it: 'Arredi di design e volte in pietra', en: 'Design furniture & stone arches' },
  },
  {
    id: 5,
    src: '/images/img_8210.jpg',
    category: 'living',
    title: { it: 'Cucina Attrezzata Moderna', en: 'Modern Equipped Kitchen' },
    subtitle: { it: 'Piano cottura e macchina espresso', en: 'Induction cooktop & espresso' },
  },
  {
    id: 6,
    src: '/images/img_8222.jpg',
    category: 'jacuzzi',
    title: { it: 'Area Idromassaggio & Lounge', en: 'Hot Tub & Lounge Deck' },
    subtitle: { it: 'Relax privato all’aperto', en: 'Private outdoor wellness' },
  },
  {
    id: 7,
    src: '/images/img_8198.jpg',
    category: 'exterior',
    title: { it: 'Ingresso Principale & Giardino', en: 'Main Entrance & Garden' },
    subtitle: { it: 'Natura e quiete della Valle d’Itria', en: 'Peaceful Valle d’Itria nature' },
  },
  {
    id: 8,
    src: '/images/img_8201.jpg',
    category: 'bedroom',
    title: { it: 'Dettagli della Camera da Letto', en: 'Bedroom Architectural Details' },
    subtitle: { it: 'Pietra viva scolpita a mano', en: 'Hand-carved original stone' },
  },
  {
    id: 9,
    src: '/images/img_8226.jpg',
    category: 'jacuzzi',
    title: { it: 'Tramonto sull’Idromassaggio', en: 'Sunset over the Jacuzzi' },
    subtitle: { it: 'Atmosfera magica al crepuscolo', en: 'Magical dusk atmosphere' },
  },
  {
    id: 10,
    src: '/images/img_8214.jpg',
    category: 'details',
    title: { it: 'Dettagli di Charme & Arredi', en: 'Charming Details & Decor' },
    subtitle: { it: 'Materiali naturali e finiture d’autore', en: 'Natural textures and refined accents' },
  },
  {
    id: 11,
    src: '/images/img_8219.jpg',
    category: 'exterior',
    title: { it: 'Illuminazione Notturna della Tenuta', en: 'Night Illumination of the Estate' },
    subtitle: { it: 'Scenografica luce sui coni in pietra', en: 'Atmospheric light on stone cones' },
  },
  {
    id: 12,
    src: '/images/img_8228.jpg',
    category: 'details',
    title: { it: 'Elementi della Tradizione Pugliese', en: 'Traditional Puglian Elements' },
    subtitle: { it: 'Il calore dell’ospitalità autentica', en: 'Warmth of authentic hospitality' },
  },
];

export const externalLinks = {
  booking: 'https://www.booking.com/hotel/it/noce-di-pietra-luxury-trulli.it.html',
  instagram: 'https://www.instagram.com/noce_di_pietra_luxury_trulli/',
  facebook: 'https://www.facebook.com/p/Noce-di-Pietra-Luxury-Trulli-61592681723740/',
  googleMaps: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x1347ad0016f6b4b9:0x916d8fdea68c0145?sa=X&ved=1t:8290&ictx=111',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48386.17724838274!2d17.275845!3d40.765622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1347ad0016f6b4b9%3A0x916d8fdea68c0145!2sNoce%20di%20Pietra%20-%20Luxury%20Trulli!5e0!3m2!1sit!2sit!4v1710700000000!5m2!1sit!2sit',
  whatsappNumber: '393347550635', // default WhatsApp booking
  contacts: [
    {
      name: 'Paola',
      role: { it: 'Host & Prenotazioni', en: 'Host & Reservations' },
      phone: '+39 334 755 0635',
      whatsapp: '393347550635',
    },
    {
      name: 'Francesco',
      role: { it: 'Host & Accoglienza', en: 'Host & Concierge' },
      phone: '+39 327 551 4513',
      whatsapp: '393275514513',
    },
  ],
};
