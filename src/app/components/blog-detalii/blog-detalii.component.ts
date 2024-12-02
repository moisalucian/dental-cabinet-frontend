import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-detalii',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-detalii.component.html',
  styleUrl: './blog-detalii.component.scss'
})
export class BlogDetaliiComponent implements OnInit {
  postSlug: string = '';
  postDetails: any;
  
  posts = [
    {
      slug: 'importanta-consultatiilor-dentare',
      title: 'Importanța consultațiilor dentare regulate',
      image: 'assets/img/blog/blog-post-1.png',
      paragraphsArea1: [
        'Consultațiile dentare regulate reprezintă unul dintre cele mai importante aspecte ale îngrijirii sănătății orale. Ele nu doar că ajută la menținerea unui zâmbet strălucitor, ci și la prevenirea unor afecțiuni grave care pot afecta întreaga sănătate a organismului. Prin evaluări periodice, medicul dentist poate identifica din timp orice problemă, de la carii incipiente până la semne timpurii ale bolilor gingivale sau chiar ale unor afecțiuni sistemice, precum diabetul.',
        'Mulți pacienți evită vizitele la dentist din cauza fricii sau a lipsei de timp, însă aceste consultații sunt esențiale pentru a evita tratamentele complexe și costisitoare pe termen lung. Un control de rutină nu durează mult, dar impactul său pozitiv asupra sănătății poate fi imens. În plus, prevenția este întotdeauna mai simplă, mai confortabilă și mai puțin costisitoare decât tratarea problemelor avansate.'
      ],
      quote: 'Prevenția este cheia unui zâmbet sănătos. Consultațiile dentare regulate sunt fundația unei igiene orale de succes și a unei sănătăți generale optime.',
      paragraphsArea2: [
        'La o consultație dentară, medicul dentist va examina nu doar starea dinților, ci și sănătatea gingiilor, a limbii și a întregii cavități bucale. Acest proces permite identificarea problemelor ascunse care pot trece neobservate de către pacient, precum carii mici, acumulări de tartru sau chiar leziuni precanceroase. În plus, curățarea profesională realizată în timpul consultației ajută la îndepărtarea plăcii bacteriene și a tartrului, care pot duce la apariția cariilor și a bolilor parodontale.',
        'Un alt aspect crucial al consultațiilor dentare este educarea pacientului. Medicul dentist poate oferi sfaturi personalizate despre tehnici corecte de periaj, utilizarea aței dentare și alegerile alimentare care influențează sănătatea orală. Aceste informații sunt neprețuite pentru menținerea unei igiene orale excelente între vizite.'
      ],
      subtitle: 'Beneficiile consultațiilor dentare regulate',
      paragraphsArea3: [
        'Consultațiile dentare periodice nu sunt doar o măsură de prevenție, ci și o oportunitate de a investi în sănătatea ta pe termen lung. Prin identificarea timpurie a problemelor și intervenția rapidă, poți evita disconfortul, complicațiile și costurile ridicate asociate tratamentelor complexe.',
        'De asemenea, aceste vizite te ajută să ai un zâmbet încrezător și sănătos, reflectând atât grija pentru tine, cât și o imagine pozitivă în relațiile cu ceilalți. Beneficiile sunt multiple:'
      ],
      list: [
        'Identificarea precoce a problemelor dentare, cum ar fi cariile sau infecțiile.',
        'Menținerea sănătății gingiilor și prevenirea bolilor parodontale.',
        'Îmbunătățirea aspectului estetic prin eliminarea tartrului și a petelor.',
        'Reducerea costurilor dentare pe termen lung prin prevenție.',
        'Educație și consiliere personalizată privind igiena orală.'
      ],
      conclusion: 'Consultațiile dentare regulate sunt mai mult decât o simplă verificare. Ele reprezintă un angajament față de sănătatea ta și o investiție în bunăstarea pe termen lung. Nu amâna! Programează-ți acum o vizită la medicul dentist pentru a te bucura de toate aceste beneficii.',
      tags: ['consultatii-dentare', 'sanatate-orala', 'igiena-dentara', 'preventie'],
    },
    {
      slug: 'beneficii-albire-profesionala',
      title: 'Beneficiile albirii dentare profesionale',
      image: 'assets/img/blog/blog-post-2.png',
      paragraphsArea1: [
        'Un zâmbet strălucitor poate face o diferență enormă în felul în care te simți și cum te percep ceilalți. Albirea dentară profesională nu este doar un lux; este o investiție în încrederea ta și în sănătatea ta orală. Acest tratament modern și sigur poate transforma aspectul danturii tale în doar o ședință la cabinetul stomatologic.',
        'Albirea profesională oferă rezultate rapide și eficiente comparativ cu produsele over-the-counter. Tehnologiile avansate utilizate de specialiști asigură un tratament personalizat, adaptat nevoilor tale. În plus, acest proces este realizat sub supravegherea unui medic dentist, ceea ce garantează siguranța și eficiența procedurii.'
      ],
      quote: 'Un zâmbet alb și sănătos este cartea ta de vizită. Albirea profesională este cea mai sigură și eficientă metodă de a reda strălucirea dinților tăi.',
      paragraphsArea2: [
        'Pe parcursul timpului, alimentele, băuturile precum cafeaua sau ceaiul, dar și obiceiurile precum fumatul, pot cauza pete și decolorarea dinților. Albirea profesională ajută la eliminarea acestor pete persistente, oferind un aspect uniform și strălucitor. Spre deosebire de metodele de albire la domiciliu, această procedură protejează smalțul dentar și minimizează riscul de sensibilitate.',
        'Un alt avantaj al albirii profesionale este faptul că rezultatele sunt vizibile imediat după tratament. Acest lucru este ideal pentru ocazii speciale sau pentru momentele când vrei să îți îmbunătățești rapid imaginea. Mai mult, albirea realizată în cabinet durează mai mult, deoarece medicii dentiști folosesc agenți de albire de calitate superioară.'
      ],
      subtitle: 'De ce să alegi albirea dentară profesională?',
      paragraphsArea3: [
        'Albirea dentară nu înseamnă doar un aspect estetic îmbunătățit. Este și o expresie a sănătății orale și a grijii pentru propria imagine. Prin procedurile profesionale, nu doar că vei avea un zâmbet mai alb, dar te vei simți și mai încrezător în interacțiunile zilnice.',
        'Beneficiile acestui tratament sunt multiple, iar printre cele mai importante se numără:'
      ],
      list: [
        'Rezultate rapide și vizibile imediat.',
        'Protejarea smalțului dentar și reducerea sensibilității.',
        'Eliminarea petelor cauzate de alimente, băuturi și fumat.',
        'Durabilitate crescută comparativ cu metodele de albire la domiciliu.',
        'Procedură sigură, realizată sub supravegherea unui medic dentist.',
      ],
      conclusion: 'Albirea dentară profesională este o metodă sigură, eficientă și rapidă pentru a obține un zâmbet strălucitor. Alege această procedură pentru a-ți reda încrederea și a-ți transforma aspectul danturii. Programează-te acum pentru a descoperi cum îți putem reda strălucirea dinților!',
      tags: ['albire-dentara', 'sanatate-orala', 'zambet-stralucitor', 'estetica-dentara'],
    },
    {
      slug: 'ghid-implanturi-dentare',
      title: 'Ghid complet pentru implanturile dentare',
      image: 'assets/img/blog/blog-post-3.png',
      paragraphsArea1: [
        'Implanturile dentare reprezintă soluția ideală pentru înlocuirea dinților pierduți, oferind atât funcționalitate, cât și estetică deosebită. Acestea sunt proiectate să arate, să se simtă și să funcționeze la fel ca dinții naturali, ceea ce le face o opțiune preferată de pacienți și medici stomatologi deopotrivă.',
        'Procesul de inserare a unui implant dentar implică fixarea unui șurub din titan în osul maxilar sau mandibular, acesta acționând ca o rădăcină artificială. După o perioadă de vindecare, pe acest implant se montează o coroană dentară personalizată, care completează zâmbetul pacientului și redă funcționalitatea completă a danturii.'
      ],
      quote: 'Implanturile dentare sunt cea mai avansată soluție pentru înlocuirea dinților pierduți, oferind durabilitate, confort și un aspect natural.',
      paragraphsArea2: [
        'Avantajul major al implanturilor dentare este că ele integrează perfect tehnologia modernă cu estetica și funcționalitatea. Spre deosebire de alte metode, cum ar fi punțile sau protezele detașabile, implanturile nu afectează dinții vecini și previn pierderea osoasă asociată cu lipsa unui dinte.',
        'Durabilitatea implanturilor este un alt aspect de luat în considerare. Cu o igienă orală corespunzătoare și vizite regulate la dentist, acestea pot rezista toată viața. În plus, ele elimină disconfortul și instabilitatea adesea asociate cu protezele tradiționale.'
      ],
      subtitle: 'De ce să alegi implanturile dentare?',
      paragraphsArea3: [
        'Alegerea implanturilor dentare nu înseamnă doar recâștigarea funcționalității danturii, ci și îmbunătățirea calității vieții. Prin stabilitate, confort și aspect natural, acestea oferă o soluție completă pentru cei care doresc să zâmbească și să mănânce fără griji.',
        'Beneficiile lor sunt multiple și fac din implanturi o investiție pe termen lung:'
      ],
      list: [
        'Aspect natural, identic cu dinții reali.',
        'Durabilitate pe termen lung, cu îngrijire minimă.',
        'Prevenirea pierderii osoase și menținerea structurii faciale.',
        'Funcționalitate completă, permițând mestecarea normală a alimentelor.',
        'Nu afectează dinții vecini, spre deosebire de punțile dentare tradiționale.',
        'Îmbunătățirea încrederii de sine și a calității vieții.',
      ],
      conclusion: 'Implanturile dentare sunt o soluție inovatoare, sigură și eficientă pentru cei care își doresc să-și redobândească zâmbetul și sănătatea orală. Programează-te acum pentru o consultație și descoperă cum implanturile dentare pot transforma complet viața ta!',
      tags: ['implanturi-dentare', 'dinti-pierduti', 'sanatate-orala', 'solutii-dentare'],
    },
    {
      slug: 'rolul-fluorului-prevenirea-cariilor',
      title: 'Rolul fluorului în prevenirea cariilor dentare',
      image: 'assets/img/blog/blog-post-4.png',
      paragraphsArea1: [
        'Fluorul joacă un rol esențial în menținerea sănătății orale, fiind unul dintre cele mai eficiente instrumente pentru prevenirea cariilor dentare. Acest mineral natural ajută la întărirea smalțului dentar, făcându-l mai rezistent la atacurile acide provocate de bacteriile din placa dentară. În plus, fluorul contribuie la remineralizarea zonelor în care smalțul a început să se degradeze, prevenind astfel apariția cariilor.',
        'De-a lungul timpului, utilizarea fluorului în stomatologie a revoluționat prevenția orală. Produsele precum pasta de dinți, apa de gură sau tratamentele profesionale cu fluor sunt acum pilonii unei igiene orale eficiente. Însă beneficiile acestui mineral nu se opresc aici: fluorul acționează și la nivel comunitar, prin fluorurarea apei potabile, o măsură dovedită științific în reducerea cariilor la nivel global.'
      ],
      quote: 'Fluorul este scutul invizibil al dinților, oferind protecție împotriva cariilor și menținând sănătatea orală de-a lungul vieții.',
      paragraphsArea2: [
        'Cariile dentare apar atunci când acizii produși de bacterii atacă smalțul dinților, slăbind structura acestuia. Fluorul joacă un rol-cheie în combaterea acestui proces, neutralizând atacul acid și promovând remineralizarea. În mod particular, fluorul este eficient pentru copii și adolescenți, a căror dentiție este încă în formare, dar beneficiile se extind și la adulți, prevenind deteriorarea ulterioară.',
        'În plus, fluorul ajută la reducerea sensibilității dentare și poate preveni chiar și stadiile incipiente ale cariilor, înainte ca acestea să necesite tratamente complexe. Acest efect protector este motivul pentru care medicii stomatologi recomandă folosirea zilnică a produselor care conțin fluor.'
      ],
      subtitle: 'Cum ajută fluorul la menținerea sănătății orale?',
      paragraphsArea3: [
        'Beneficiile fluorului sunt numeroase, iar integrarea sa în rutina zilnică de igienă orală este esențială pentru sănătatea dinților. Acțiunea sa preventivă și restaurativă face din fluor un aliat indispensabil împotriva cariilor. Pentru a profita la maximum de avantajele acestuia, este important să utilizăm produsele potrivite și să respectăm recomandările medicului dentist.',
        'Printre cele mai importante beneficii ale fluorului se numără:'
      ],
      list: [
        'Întărirea smalțului dentar, crescând rezistența la atacurile acide.',
        'Remineralizarea zonelor afectate de începuturile cariilor.',
        'Reducerea riscului de apariție a cariilor la copii și adulți.',
        'Prevenirea sensibilității dentare prin protecția rădăcinilor expuse.',
        'Oferirea unei soluții simple și accesibile pentru prevenirea problemelor dentare.'
      ],
      conclusion: 'Fluorul este un element esențial pentru menținerea sănătății orale și prevenirea cariilor. Prin utilizarea zilnică a pastelor de dinți și a apei de gură care conțin fluor, dar și prin tratamente profesionale regulate, îți poți proteja dinții pe termen lung. Programează-te acum pentru o consultație și află cum să integrezi fluorul în rutina ta zilnică!',
      tags: ['fluor', 'carii-dentare', 'prevenire', 'igiena-orala', 'sanatate-dentara'],
    },
    {
      slug: 'sensibilitatea-dentara-cauze-tratamente',
      title: 'Sensibilitatea dentară: cauze și tratamente',
      image: 'assets/img/blog/blog-post-5.png',
      paragraphsArea1: [
        'Sensibilitatea dentară este o problemă comună care afectează milioane de oameni din întreaga lume. Aceasta apare atunci când dinții reacționează la stimuli externi, cum ar fi alimentele sau băuturile reci, fierbinți, dulci sau acide. Disconfortul resimțit poate varia de la ușoară jenă până la durere intensă, afectând calitatea vieții și capacitatea de a te bucura de mesele preferate.',
        'De cele mai multe ori, sensibilitatea dentară este rezultatul expunerii dentinei, stratul interior al dintelui, cauzată de deteriorarea smalțului sau retragerea gingiilor. Acest lucru lasă nervii dinților vulnerabili la stimuli externi, generând o senzație neplăcută. Deși poate părea o problemă minoră, ignorarea sensibilității dentare poate duce la complicații mai grave în timp.'
      ],
      quote: 'Sensibilitatea dentară poate fi gestionată eficient cu tratamente personalizate și o igienă orală corespunzătoare.',
      paragraphsArea2: [
        'Există numeroase cauze pentru sensibilitatea dentară, iar identificarea acestora este esențială pentru un tratament eficient. Printre cele mai frecvente se numără periajul agresiv, consumul excesiv de alimente acide, scrâșnitul din dinți sau utilizarea necorespunzătoare a produselor de albire. De asemenea, sensibilitatea poate fi un semn al unor probleme mai grave, cum ar fi carii netratate, fracturi dentare sau boli gingivale.',
        'Vestea bună este că sensibilitatea dentară poate fi tratată. În funcție de severitatea și cauza sa, medicul dentist poate recomanda diverse opțiuni, de la pastă de dinți specială și geluri fluorurate, până la tratamente profesionale pentru întărirea smalțului sau protecția rădăcinilor expuse. Este important să consulți un specialist pentru a identifica cel mai potrivit tratament pentru nevoile tale.'
      ],
      subtitle: 'Cum poți gestiona și preveni sensibilitatea dentară?',
      paragraphsArea3: [
        'Sensibilitatea dentară poate fi redusă și chiar prevenită prin respectarea unor practici simple, dar eficiente, de îngrijire orală. Adoptarea unui periaj delicat, utilizarea unei paste de dinți formulate pentru dinți sensibili și evitarea consumului excesiv de alimente acide sunt pași esențiali pentru a proteja smalțul și a preveni deteriorarea suplimentară.',
        'Mai mult decât atât, colaborarea cu medicul dentist pentru monitorizarea regulată a sănătății orale poate face o diferență semnificativă. Printre cele mai importante recomandări se numără:'
      ],
      list: [
        'Folosirea unei periuțe de dinți cu peri moi pentru a preveni abraziunea smalțului.',
        'Utilizarea pastelor de dinți special concepute pentru dinți sensibili.',
        'Aplicarea tratamentelor cu fluor pentru întărirea smalțului dentar.',
        'Evitarea alimentelor și băuturilor extrem de acide, cum ar fi citricele și sucurile carbogazoase.',
        'Programează controale regulate la dentist pentru a preveni și gestiona problemele dentare timpurii.'
      ],
      conclusion: 'Sensibilitatea dentară nu trebuie să fie un obstacol în calea unei vieți normale. Prin adoptarea unor măsuri preventive și tratamente personalizate, poți reduce disconfortul și proteja sănătatea orală. Consultă medicul dentist pentru a descoperi soluțiile care se potrivesc cel mai bine nevoilor tale!',
      tags: ['sensibilitate-dentara', 'igiena-orala', 'tratamente-dentare', 'prevenire-carii'],
    },
    {
      slug: 'avantajele-protezarii-dentare',
      title: 'Avantajele protezării dentare: soluții moderne',
      image: 'assets/img/blog/blog-post-6.png',
      paragraphsArea1: [
        'Protezarea dentară reprezintă o soluție esențială pentru pacienții care și-au pierdut unul sau mai mulți dinți. Această procedură modernă nu doar că restabilește funcționalitatea danturii, ci îmbunătățește semnificativ aspectul estetic și calitatea vieții. Datorită avansurilor tehnologice, protezele dentare de astăzi sunt mult mai confortabile, durabile și estetice decât cele din trecut.',
        'Indiferent dacă este vorba de proteze fixe, mobilizabile sau implanturi dentare, fiecare soluție este concepută pentru a răspunde nevoilor individuale ale pacienților. Alegerea tipului potrivit de proteză se face împreună cu medicul dentist, luând în considerare sănătatea orală, preferințele personale și bugetul pacientului.'
      ],
      quote: 'Protezarea dentară modernă este mai mult decât o necesitate; este o cale de a redobândi încrederea, funcționalitatea și sănătatea zâmbetului tău.',
      paragraphsArea2: [
        'Pierderea dinților poate afecta atât sănătatea orală, cât și stima de sine. Fără tratament, aceasta poate duce la probleme precum dificultăți în mestecare, modificări ale vorbirii sau chiar pierderea masei osoase în maxilar. Din fericire, protezarea dentară modernă oferă soluții eficiente pentru a combate aceste probleme.',
        'Protezarea dentară fixează stabilitatea danturii, îmbunătățește estetica facială și readuce confortul în activitățile zilnice, precum alimentația și vorbirea. Soluțiile moderne sunt realizate din materiale de înaltă calitate, cum ar fi ceramica sau zirconiul, care asigură un aspect natural și o durabilitate crescută.'
      ],
      subtitle: 'De ce să alegi protezarea dentară modernă?',
      paragraphsArea3: [
        'Tehnologiile moderne din domeniul stomatologiei au transformat protezarea dentară într-o procedură simplă și eficientă. Fie că ai nevoie de o proteză totală sau parțială, soluțiile actuale se adaptează perfect nevoilor și preferințelor tale. În plus, aceste tratamente contribuie la prevenirea unor probleme mai grave, precum pierderea suplimentară a dinților sau resorbția osoasă.',
        'Beneficiile protezării dentare sunt variate și includ următoarele avantaje remarcabile:'
      ],
      list: [
        'Redobândirea capacității de a mesteca și vorbi confortabil.',
        'Îmbunătățirea aspectului facial și a armoniei zâmbetului.',
        'Prevenirea resorbției osoase și menținerea structurii maxilarului.',
        'Durabilitate ridicată datorită materialelor de calitate superioară.',
        'Confort sporit datorită tehnologiilor personalizate.',
        'Adaptabilitate pentru orice nevoie, de la proteze fixe la cele mobilizabile.',
      ],
      conclusion: 'Protezarea dentară modernă este mai mult decât o soluție practică – este o investiție în sănătatea și calitatea vieții tale. Programează-te acum pentru o consultație și descoperă care este soluția potrivită pentru tine!',
      tags: ['protezare-dentara', 'dinti-sanatate', 'solutii-moderne', 'zambet-natural'],
    },
    {
      slug: 'pasi-igiena-orala-corecta',
      title: 'Pași pentru o igienă orală corectă',
      image: 'assets/img/blog/blog-post-7.png',
      paragraphsArea1: [
        'O igienă orală corectă este esențială pentru menținerea sănătății dinților și gingiilor, prevenirea cariilor și a altor afecțiuni dentare. Nu doar că asigură un zâmbet strălucitor, dar contribuie și la bunăstarea generală a organismului. Bolile orale pot influența sănătatea întregului corp, fiind asociate cu afecțiuni precum boli cardiovasculare sau diabet.',
        'Începând de la o vârstă fragedă, este important să adoptăm obiceiuri sănătoase de îngrijire orală. Chiar dacă pare simplu, mulți oameni nu realizează corect periajul sau omit pași importanți în rutina zilnică. În acest articol, vom detalia pașii esențiali pentru a asigura o igienă orală optimă și pentru a menține sănătatea zâmbetului tău.'
      ],
      quote: 'Un zâmbet sănătos începe cu o igienă orală corectă. Micile obiceiuri zilnice fac diferența pe termen lung.',
      paragraphsArea2: [
        'Primul pas în igiena orală corectă este periajul dinților de cel puțin două ori pe zi, dimineața și seara, timp de două minute. Este esențial să utilizăm o periuță de dinți cu peri moi și o pastă de dinți cu fluor, care ajută la întărirea smalțului și prevenirea cariilor. Tehnica de periaj contează la fel de mult ca frecvența; mișcările trebuie să fie blânde, circulare, acoperind toate suprafețele dinților, inclusiv linia gingiei.',
        'Ața dentară este adesea neglijată, însă este esențială pentru îndepărtarea plăcii bacteriene și a resturilor alimentare dintre dinți, unde periuța nu poate ajunge. Folosirea aței dentare cel puțin o dată pe zi previne formarea cariilor interdentare și a bolilor gingivale. În plus, utilizarea unei ape de gură antiseptice poate ajuta la reducerea bacteriilor și la menținerea unei respirații proaspete.'
      ],
      subtitle: 'Pașii esențiali pentru o igienă orală perfectă',
      paragraphsArea3: [
        'Pentru a asigura o îngrijire orală completă, este important să includem în rutina noastră zilnică următorii pași și să fim constanți în aplicarea lor:',
        'Implementarea acestor practici va contribui semnificativ la menținerea sănătății orale și la prevenirea problemelor dentare.'
      ],
      list: [
        'Periază-ți dinții de două ori pe zi, timp de două minute, folosind o tehnică corectă.',
        'Folosește ața dentară zilnic pentru a îndepărta placa bacteriană dintre dinți.',
        'Utilizează o apă de gură antiseptică pentru a reduce bacteriile și a împrospăta respirația.',
        'Schimbă-ți periuța de dinți la fiecare 3 luni sau când perii se tocesc.',
        'Limitează consumul de alimente și băuturi bogate în zahăr și acid.',
        'Hidratează-te adecvat și consumă alimente bogate în calciu și vitamina D.',
        'Programează vizite regulate la medicul dentist, de cel puțin două ori pe an, pentru control și igienizare profesională.'
      ],
      conclusion: 'Adoptarea unei rutine corecte de igienă orală este investiția cea mai valoroasă pe care o poți face pentru sănătatea ta. Prin respectarea pașilor menționați și prin colaborarea cu medicul dentist, poți asigura un zâmbet sănătos și strălucitor pe termen lung. Începe chiar de astăzi să îți îmbunătățești obiceiurile de îngrijire orală!',
      tags: ['igiena-orala', 'periaj-dentar', 'sanatate-dentara', 'prevenire-carii', 'sfaturi-dentare'],
    },
    {
      slug: 'alimentatie-sanatate-orala',
      title: 'Rolul alimentației în menținerea sănătății orale',
      image: 'assets/img/blog/blog-post-8.png',
      paragraphsArea1: [
        'Alimentația joacă un rol esențial în menținerea sănătății orale. Consumul de alimente sănătoase contribuie la întărirea dinților și la prevenirea cariilor, în timp ce obiceiurile alimentare nesănătoase pot favoriza apariția problemelor dentare. O dietă echilibrată, bogată în vitamine și minerale, sprijină sănătatea gingiilor și a smalțului dentar.',
        'Zahărul și alimentele acide sunt principalii inamici ai sănătății orale. Acestea creează un mediu prielnic pentru bacterii, care atacă smalțul și provoacă carii. În schimb, alimentele bogate în calciu, vitamina D și fosfor întăresc dinții și reduc riscul de deteriorare.'
      ],
      quote: 'O alimentație echilibrată este fundația unui zâmbet sănătos. Alegerile tale alimentare influențează sănătatea dinților pe termen lung.',
      paragraphsArea2: [
        'Consumul de apă este esențial pentru sănătatea orală, deoarece ajută la eliminarea resturilor alimentare și la menținerea unui mediu neutru în gură. În același timp, lactatele, cum ar fi laptele, iaurtul și brânza, contribuie la întărirea smalțului și reduc riscul de carii.',
        'Include în dieta ta alimente bogate în fibre, precum fructele și legumele proaspete, care stimulează producția de salivă și curăță dinții în mod natural. De asemenea, evită gustările frecvente și limitează consumul de băuturi carbogazoase, care pot eroda smalțul.'
      ],
      subtitle: 'Alimente benefice pentru sănătatea orală',
      paragraphsArea3: [
        'O dietă echilibrată nu doar că susține sănătatea orală, ci îmbunătățește și starea generală a organismului. Iată câteva alimente care ar trebui incluse în rutina ta zilnică pentru a avea un zâmbet sănătos:'
      ],
      list: [
        'Mere, morcovi și țelină pentru curățarea naturală a dinților.',
        'Lactate pentru aportul de calciu și fosfor.',
        'Pește gras și ouă pentru vitamina D, care ajută la absorbția calciului.',
        'Nuci și semințe pentru mineralele esențiale.',
        'Ceai verde pentru proprietățile sale antibacteriene.'
      ],
      conclusion: 'Alegerile alimentare corecte pot face diferența între un zâmbet sănătos și unul afectat de carii. Adoptă o dietă echilibrată și completează obiceiurile alimentare sănătoase cu o igienă orală corectă pentru a-ți menține dinții puternici și sănătoși.',
      tags: ['alimentatie-sanatoasa', 'dieta-orala', 'igiena-dentara', 'prevenire-carii'],
    },
    {
      slug: 'importanta-ingrijirii-dentare-copii',
      title: 'Importanța îngrijirii dentare la copii',
      image: 'assets/img/blog/blog-post-9.png',
      paragraphsArea1: [
        'Îngrijirea dentară corectă începe încă din copilărie și joacă un rol crucial în dezvoltarea sănătății orale a celor mici. Deși dinții de lapte sunt temporari, aceștia au o importanță esențială pentru sănătatea orală generală, influențând modul în care copilul mănâncă, vorbește și zâmbește. Neglijarea sănătății orale în copilărie poate duce la probleme dentare care persistă și în viața adultă.',
        'Educația timpurie privind igiena orală și vizitele regulate la medicul dentist ajută la prevenirea cariilor și a altor afecțiuni. În plus, obiceiurile bune formate în copilărie vor deveni parte din rutina zilnică a copilului pe termen lung, asigurându-i un zâmbet sănătos pentru toată viața.'
      ],
      quote: 'Un zâmbet sănătos începe din copilărie. Îngrijirea orală timpurie construiește baza pentru o sănătate dentară durabilă.',
      paragraphsArea2: [
        'Cariile dentare sunt printre cele mai frecvente probleme de sănătate la copii, dar ele pot fi prevenite cu ușurință printr-o igienă orală corespunzătoare și vizite regulate la dentist. Dinții de lapte, deși temporari, sunt esențiali pentru ghidarea creșterii dinților permanenți și pentru menținerea unui aliniament corect al maxilarului.',
        'În plus, îngrijirea dentară la copii contribuie la construirea încrederii în sine. Un copil cu dinți sănătoși va zâmbi mai des și se va simți mai confortabil în interacțiunile sociale. Rolul părinților este esențial în acest proces, prin supravegherea periajului și adoptarea unor obiceiuri alimentare sănătoase.'
      ],
      subtitle: 'Cum să îngrijim corect dinții copiilor?',
      paragraphsArea3: [
        'Îngrijirea dentară la copii implică mai mult decât simplul periaj al dinților. Este necesară o abordare completă care include educație, prevenție și vizite regulate la medicul dentist. Prin crearea unei rutine sănătoase și prin transformarea îngrijirii orale într-o activitate plăcută, copiii vor învăța să își aprecieze sănătatea dentară.',
        'Pașii esențiali pentru a asigura sănătatea orală a copiilor includ:'
      ],
      list: [
        'Începerea periajului dinților de la apariția primilor dinți, utilizând o periuță moale și o cantitate mică de pastă de dinți cu fluor.',
        'Monitorizarea periajului până când copilul este capabil să își perieze corect dinții singur (de obicei după vârsta de 6-7 ani).',
        'Evitarea consumului excesiv de dulciuri și băuturi acidulate, care pot favoriza apariția cariilor.',
        'Programarea controalelor dentare regulate, începând de la vârsta de 1 an.',
        'Încurajarea copilului să utilizeze ața dentară pentru a preveni acumularea plăcii bacteriene între dinți.',
        'Crearea unui mediu pozitiv în jurul vizitelor la dentist pentru a reduce anxietatea sau teama.'
      ],
      conclusion: 'Îngrijirea dentară timpurie este cheia unui zâmbet sănătos și încrezător. Prin educație, prevenție și îngrijire adecvată, putem ajuta copiii să dezvolte obiceiuri sănătoase care le vor proteja sănătatea orală pe termen lung. Programează o vizită la dentist pentru micuțul tău și pune bazele unui zâmbet strălucitor!',
      tags: ['ingrijire-dentara', 'copii', 'igiena-orala', 'preventie', 'carii-dentare'],
    },
    {
      slug: 'pregatire-vizita-dentist-copii',
      title: 'Cum să-ți pregătești copilul pentru prima vizită la dentist',
      image: 'assets/img/blog/blog-post-10.png',
      paragraphsArea1: [
        'Prima vizită la dentist este un moment important pentru copil și pentru părinți. Aceasta reprezintă începutul unei relații de încredere cu medicul dentist și pune bazele unei rutine de îngrijire orală corectă. Cu toate acestea, mulți copii pot fi reticenți sau speriați de necunoscut.',
        'Pregătirea copilului pentru prima vizită la dentist este esențială pentru a transforma această experiență într-una pozitivă. Comunicarea deschisă, jocurile de rol și alegerea unui cabinet prietenos cu copiii sunt doar câteva strategii care pot ajuta.'
      ],
      quote: 'O primă vizită plăcută la dentist deschide calea către o relație pozitivă cu sănătatea orală.',
      paragraphsArea2: [
        'Este important să explici copilului ce se va întâmpla la dentist, folosind un limbaj simplu și pozitiv. De exemplu, poți spune că medicul va număra dinții și îi va face să strălucească. Evită termenii care pot speria copilul, cum ar fi "durere" sau "injecție".',
        'De asemenea, poți simula o vizită la dentist acasă, jucând rolurile de medic și pacient. Acest joc va ajuta copilul să înțeleagă mai bine ce urmează și să se simtă mai relaxat. Alegerea unei clinici stomatologice specializate în îngrijirea copiilor este un alt factor care poate face diferența.'
      ],
      subtitle: 'Sfaturi pentru o primă vizită reușită',
      paragraphsArea3: [
        'Pregătirea copilului pentru prima vizită la dentist poate fi simplă și eficientă, dacă aplici câteva strategii utile. Acestea pot contribui la reducerea anxietății și la crearea unei experiențe pozitive.',
        'Iată câteva recomandări practice pentru părinți:'
      ],
      list: [
        'Vorbește cu copilul despre vizita la dentist folosind un ton calm și pozitiv.',
        'Alege o clinică prietenoasă cu copiii, cu personal specializat.',
        'Programează vizita într-un moment al zilei când copilul este bine odihnit.',
        'Folosește cărți sau videoclipuri educative despre îngrijirea dentară.',
        'Recompensează copilul pentru curajul său după vizită, dar evită dulciurile.'
      ],
      conclusion: 'Prima vizită la dentist este un pas important în viața copilului tău. Printr-o pregătire adecvată și sprijin emoțional, poți transforma această experiență într-un început promițător pentru sănătatea orală a micuțului tău.',
      tags: ['copii', 'vizita-dentist', 'igiena-orala', 'educatie-dentara'],
    }
  ];
  

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.postSlug = params.get('slug') || '';
      this.postDetails = this.posts.find((post) => post.slug === this.postSlug);
    });
  }

  getSplitTitle(title: string): { firstWord: string; remainingWords: string } {
    const words = title.split(' ');
    return {
      firstWord: words[0], // The first word
      remainingWords: words.slice(1).join(' ') // The rest of the title
    };
  }
}
