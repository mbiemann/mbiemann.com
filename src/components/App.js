import { ThemeToggle } from "./ThemeToggle"

export function App() {
  return (
    <div className="container">

      <div className="navbar navbar-expand-sm border-bottom">
        <div className="navbar-toggler">
          <button className="btn" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <i className="bi bi-list" />
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link d-flex fw-semibold pe-2" href="/">mbiemann.com</a></li>
            <li className="nav-item"><a className="nav-link d-flex fw-light pe-1" href="#profiles"><i className="bi bi-people"/><span className="ms-1 d-block d-sm-none d-md-block">Profiles</span></a></li>
            <li className="nav-item"><a className="nav-link d-flex fw-light pe-1" href="#certificates"><i className="bi bi-clipboard-check"/><span className="ms-1 d-block d-sm-none d-md-block">Certificates</span></a></li>
            <li className="nav-item"><a className="nav-link d-flex fw-light pe-1" href="#skills"><i className="bi bi-stars"/><span className="ms-1 d-block d-sm-none d-md-block">Skills</span></a></li>
            <li className="nav-item"><a className="nav-link d-flex fw-light pe-1" href="#apps"><i className="bi bi-code"/><span className="ms-1 d-block d-sm-none d-md-block">Apps</span></a></li>
            <li className="nav-item"><a className="nav-link d-flex fw-light pe-1" href="#portfolio"><i className="bi bi-kanban"/><span className="ms-1 d-block d-sm-none d-md-block">Portfolio</span></a></li>
            <li className="nav-item"><a className="nav-link d-flex fw-light" href="#contact"><i className="bi bi-envelope"/><span className="ms-1 d-block d-sm-none d-md-block">Contact</span></a></li>
          </ul>
        </div>
        <ThemeToggle/>
      </div>

      <h1 className="mt-5 text-center">
        Marcell Biemann
      </h1>

      <p className="pt-3 text-center">
        Welcome to my <span className="fst-italic">(under construction)</span> website.
      </p>

      <h3 id="profiles" className="pt-5 border-top mt-5">
        <i className="bi bi-people me-3"/>
        Profiles
      </h3>

      <p className="pt-3">
        (list of my profiles)
      </p>

      <h3 id="certificates" className="pt-5 border-top mt-5">
        <i className="bi bi-clipboard-check me-3"/>
        Certificates
      </h3>

      <p className="pt-3">
        (list of my certificates)
      </p>

      <h3 id="skills" className="pt-5 border-top mt-5">
        <i className="bi bi-stars me-3"/>
        Skills
      </h3>

      <p className="pt-3">
        (list of my skills)
      </p>

      <h3 id="apps" className="pt-5 border-top mt-5">
        <i className="bi bi-code me-3"/>
        Apps
      </h3>

      <p className="pt-3">
        (list of my apps)
      </p>

      <h3 id="portfolio" className="pt-5 border-top mt-5">
        <i className="bi bi-kanban me-3"/>
        Portfolio
      </h3>

      <p className="pt-3">
        (list of my projects)
      </p>

      <h3 id="contact" className="pt-5 border-top mt-5">
        <i className="bi bi-envelope me-3"/>
        Contact
      </h3>

      <p className="pt-3">
        (how contact me?)
      </p>

      <p className="pt-5 text-center text-secondary fw-light lh-sm border-top mt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu pretium elit, sed laoreet metus. Fusce mollis vel augue nec egestas. Etiam eros nunc, vehicula pretium orci sed, interdum iaculis leo. Pellentesque sed massa sit amet purus posuere elementum. Vivamus ullamcorper orci maximus purus eleifend, a tincidunt sem tincidunt. Vivamus pulvinar metus ut lacus pellentesque malesuada. Mauris arcu lectus, vehicula sed sagittis et, bibendum vitae diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed at risus interdum, condimentum nisl eget, mollis elit. Sed dolor risus, feugiat vel accumsan vitae, venenatis ut ex. Duis fringilla tristique elit, a egestas nisl. Sed viverra, eros a fringilla pretium, metus nisl ultrices mi, convallis auctor neque dolor ut eros. Donec magna odio, interdum quis egestas vel, ultricies eget augue.
        Donec aliquam lorem id mi viverra ultricies. Quisque non enim metus. Duis gravida vestibulum odio. Nullam vel tortor ut purus facilisis tincidunt non quis magna. Sed euismod tellus ut nisl posuere sollicitudin. Duis at rutrum metus. Integer luctus sodales varius. Nam a nisi sed elit tristique consequat. Aliquam dictum eget lorem ut posuere. Sed faucibus purus a velit tempus, viverra congue nunc bibendum. Aenean vel vulputate mi, eget aliquam eros. In vehicula ultricies mauris, nec tristique enim condimentum non. Praesent tincidunt massa pretium convallis egestas. Etiam egestas, massa et malesuada volutpat, arcu dui varius purus, eu varius magna lacus non nibh. Cras dictum ligula nisl, nec condimentum turpis vulputate nec. Ut vitae dui sit amet est aliquam laoreet in vitae justo.
        Cras dapibus justo nec felis suscipit, a euismod tellus consequat. Suspendisse potenti. Quisque volutpat feugiat dui, non aliquet justo dapibus id. Maecenas congue neque vitae porttitor sagittis. Phasellus a diam enim. Curabitur blandit tellus in nisi tincidunt bibendum. Sed odio mauris, fermentum vel lacinia a, sagittis vel nulla. Nunc vel magna rutrum, elementum orci ut, condimentum enim. Maecenas faucibus augue in urna eleifend hendrerit. Pellentesque vehicula diam et egestas faucibus. Ut ultricies dapibus nunc vitae venenatis. Nulla vitae interdum leo, a condimentum dui. Donec quis ultricies lacus. Maecenas placerat lacus quis finibus consectetur.
        Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In non bibendum est. Proin varius, dui a interdum sollicitudin, eros nunc scelerisque magna, id commodo libero mi sit amet elit. Cras rutrum tempor ante a cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat vel felis in porttitor. Duis placerat odio eu enim eleifend, congue pretium metus rhoncus. Phasellus eleifend vulputate enim, eu convallis mi commodo eu. Morbi rutrum lacinia pellentesque. Morbi vulputate ex eu vulputate posuere. Aenean pretium velit sed elit auctor, vitae consectetur purus rutrum. Aliquam et est vehicula, egestas erat sed, facilisis est.
        Aliquam consequat efficitur augue, vel mollis ipsum dapibus a. Praesent sodales lacus ut diam molestie, fringilla maximus libero sagittis. Donec venenatis ante in hendrerit luctus. Quisque ultricies a purus vel porttitor. Curabitur at condimentum diam. In at orci at sem cursus facilisis. Nulla in tristique enim, ultricies blandit nisl. Maecenas vitae nisl massa. Suspendisse luctus massa dolor, eget euismod justo blandit nec.
        Etiam tortor nulla, pretium ultrices elementum et, sagittis et sem. In viverra faucibus dolor, sit amet mattis nulla semper sit amet. Aenean sem tortor, feugiat sit amet felis vitae, lobortis lacinia nisl. In augue leo, elementum eget turpis in, venenatis rutrum nibh. Sed mauris est, tempor id sodales sed, dignissim ut augue. Donec eleifend elit consectetur, convallis ante condimentum, dignissim ligula. Mauris elit enim, rutrum ac orci ut, fringilla euismod ipsum. Sed quis mauris in elit blandit faucibus. Nulla suscipit ullamcorper est in hendrerit. Nulla ultricies odio id nunc laoreet, vel dapibus tortor mollis. Phasellus maximus turpis in euismod egestas. In hac habitasse platea dictumst. Nullam semper purus sed urna porttitor posuere. Nullam in diam lobortis mauris dapibus cursus in ut ligula. Nulla felis dui, semper venenatis rhoncus nec, ultricies in mi. Sed nec erat sed ex varius rutrum sed sed dolor.
        Quisque rutrum imperdiet libero, a faucibus nibh dignissim a. Nunc ipsum elit, rhoncus id facilisis vitae, gravida at libero. Praesent eget dapibus risus, id pulvinar lacus. Donec in scelerisque felis. Cras hendrerit, erat mattis facilisis facilisis, diam magna posuere urna, vel hendrerit purus felis in est. Suspendisse quis elit sit amet metus maximus sodales quis sed ex. Praesent tincidunt ornare consequat. Integer in lectus viverra, elementum lorem in, tristique tortor. Sed eros urna, vehicula id ligula at, pharetra bibendum tortor. Maecenas dolor dui, efficitur sed eleifend quis, accumsan scelerisque enim. Sed accumsan tellus sed massa fringilla dignissim at eu nibh. Nulla in turpis maximus, mattis nulla at, ultricies nunc. Mauris sit amet venenatis diam.
        Cras dapibus viverra sem, id interdum nibh pharetra sed. Etiam blandit enim id mi iaculis placerat. Proin a augue vulputate, pharetra erat convallis, lacinia eros. Etiam vulputate magna aliquam mi vestibulum, rutrum volutpat elit ornare. Vestibulum dignissim bibendum mi at tempor. Donec fringilla orci ac nisi condimentum lobortis. Aliquam aliquam ipsum ac lacinia varius.
        Sed laoreet massa nulla, vel posuere est malesuada sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum convallis orci turpis, ac vulputate diam consequat sit amet. In eu neque id sapien efficitur suscipit. Praesent lobortis, nunc eu pretium blandit, odio arcu vestibulum magna, et laoreet erat turpis nec purus. Mauris tristique orci id neque condimentum, ut ultricies nulla viverra. Pellentesque vulputate cursus urna, sed malesuada ante tempus vitae. Suspendisse pellentesque fringilla nibh, non vehicula enim tincidunt non.
        Donec pulvinar elementum accumsan. Sed sit amet arcu lectus. Donec tristique risus ante, vitae elementum elit efficitur at. Aliquam id viverra nulla. Proin elit orci, varius at viverra vel, laoreet sed eros. Fusce blandit, est ac malesuada malesuada, sapien mauris lacinia leo, vitae lacinia erat dui eu dui. Sed ut tellus sapien. Donec lacus lectus, condimentum sed dictum non, blandit in nunc. Fusce vehicula, nisl vitae dictum aliquam, neque tortor posuere dui, eu condimentum neque velit sed dolor. Donec pretium sapien eros, nec sollicitudin enim fringilla vitae. Nam felis urna, tempor a turpis vitae, sagittis feugiat erat. Praesent in pellentesque ipsum, vitae euismod risus.
        Curabitur hendrerit non sem eget faucibus. Sed faucibus ipsum et lorem consequat semper. Mauris mattis urna non varius mattis. Quisque pulvinar arcu vitae enim vestibulum, a pulvinar diam iaculis. Sed a malesuada nisi. Sed faucibus, dolor sit amet cursus imperdiet, leo ex molestie augue, commodo iaculis nibh urna et erat. Aenean mattis ut dolor sodales bibendum. Sed sem nibh, auctor ac feugiat ut, blandit non ante. Morbi tempus leo eget porta pretium. Nam vitae dictum elit. Vestibulum iaculis, lorem vel molestie maximus, mi purus tincidunt nulla, ut tincidunt urna mauris sit amet sapien. Nunc fermentum bibendum risus fringilla imperdiet. Sed sed dignissim leo. Etiam quis mattis magna, a tempor felis. Phasellus ac mauris dignissim, euismod odio quis, elementum odio. Aliquam gravida sapien luctus, ultrices velit a, sagittis enim.
        Sed vulputate id lorem vitae consequat. Nulla auctor nisi et ultricies dictum. Proin scelerisque id augue vel volutpat. Vivamus non lacinia arcu. Curabitur ac vulputate lorem. Nullam consequat sed nunc at laoreet. Phasellus vehicula ligula id facilisis semper.
        Pellentesque tristique dictum rhoncus. Integer sit amet tellus pretium sapien laoreet facilisis eu quis urna. Mauris iaculis, turpis condimentum maximus imperdiet, ante est interdum risus, rhoncus convallis ex turpis ut nunc. Sed varius lectus erat. In malesuada lacus at diam tincidunt dictum. Phasellus nulla leo, fermentum interdum sollicitudin eu, molestie sed sem. Vestibulum id est sed lorem ullamcorper scelerisque vel sit amet eros. Maecenas tincidunt varius mi, et imperdiet nunc ullamcorper nec. Vestibulum vitae massa erat. Pellentesque dapibus libero ut metus porta, quis bibendum eros commodo. Sed semper elementum neque, sed sollicitudin sapien. In pretium laoreet ullamcorper. Phasellus laoreet eleifend odio, eget venenatis arcu ornare id. Morbi laoreet imperdiet mauris at pretium.
        Cras nec rhoncus eros, nec elementum sapien. Proin dictum orci eget nisl pharetra, et tincidunt erat pharetra. Aenean interdum ullamcorper sapien, iaculis gravida purus feugiat id. Sed commodo interdum nisl, sit amet tincidunt ligula lacinia et. Integer a odio at velit eleifend vestibulum. Quisque quis tellus eleifend, tempus velit quis, maximus neque. Sed posuere finibus felis ac porta. Integer rutrum accumsan risus at aliquet. Maecenas condimentum tellus ut auctor vehicula. Vivamus pellentesque massa quis neque suscipit, eu mollis ex vulputate. Fusce lectus magna, interdum quis ante sit amet, facilisis malesuada sapien.
        Mauris ac lacus felis. Mauris vehicula elit orci, aliquam aliquam diam sodales quis. Praesent porttitor leo sed lectus hendrerit sagittis ut et leo. Praesent id massa enim. Vestibulum id eleifend turpis. Sed vitae congue ligula, non mattis nisi. Donec scelerisque mauris non lorem imperdiet, id mollis nunc scelerisque. Sed congue massa in orci consequat pharetra.
        Nunc vulputate commodo efficitur. Nullam ultrices nunc erat, vitae convallis sapien faucibus at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean quam massa, efficitur eu est eget, varius ullamcorper leo. Aenean a commodo est. Nam vel felis eu orci gravida iaculis sed quis ipsum. Sed quis pellentesque lorem.
        Phasellus commodo lacus non sapien dignissim, vel ultrices lacus sodales. Curabitur augue diam, molestie non est eget, blandit luctus sapien. Morbi luctus sollicitudin purus, in convallis risus laoreet a. Morbi sed lacus dictum, malesuada lorem quis, consectetur urna. Fusce ut tincidunt neque. Nam cursus eros et lacus ullamcorper posuere. Ut ac nisl augue. Sed aliquet eu purus nec porttitor. Morbi nec feugiat odio.
        Curabitur a dolor pharetra, laoreet risus ut, sodales neque. Phasellus sapien justo, mollis aliquam dui ut, facilisis porttitor mauris. Vivamus consequat non tellus at aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum convallis consequat orci, sed ultrices augue fermentum et. Vestibulum vulputate tortor et ligula convallis rhoncus. Maecenas nec finibus ipsum, sit amet gravida lorem. Donec sed sollicitudin nibh, id aliquam nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean enim metus, viverra id ligula non, pharetra tincidunt erat. Maecenas ut rutrum mauris. Nunc maximus diam sed eros euismod fermentum. Morbi sit amet leo dignissim, luctus arcu vel, ornare nunc.
        Nunc non auctor libero. Ut eget laoreet risus. Vestibulum in sem ac dui feugiat placerat elementum at dui. Nunc erat leo, hendrerit id risus sed, rutrum finibus orci. Ut consectetur tortor eget dui dictum laoreet. Pellentesque venenatis ante non turpis blandit pulvinar. Praesent gravida consequat tellus, vel ornare dolor iaculis ultricies. Pellentesque tristique sem eu elementum congue. Praesent eget mauris ut dolor hendrerit egestas ut vitae elit. Duis lobortis ipsum vitae nibh porttitor lobortis. Nam sed feugiat tortor. Quisque vitae pellentesque arcu, eleifend feugiat nibh. Quisque vehicula nulla sed diam tincidunt, vitae tempus tortor imperdiet. Aenean quis venenatis lacus, tincidunt dignissim risus. Proin pulvinar cursus euismod.
        Praesent tellus lacus, pretium sed erat a, rhoncus elementum massa. Pellentesque mauris mauris, facilisis eu nisi a, facilisis imperdiet nibh. Aenean eleifend dapibus ante. Sed sagittis et ante ac pellentesque. Integer laoreet consequat luctus. Praesent suscipit lorem vitae blandit hendrerit. Etiam scelerisque egestas viverra. Etiam eu aliquet ante, non lacinia arcu. Maecenas nec ipsum vehicula, cursus tortor at, interdum neque.
        Fusce pharetra magna ac blandit porttitor. Vestibulum aliquet gravida erat eu ullamcorper. Aenean vitae hendrerit arcu. Donec lacinia feugiat aliquet. Curabitur semper ipsum vel quam pulvinar, quis lobortis velit hendrerit. Duis placerat rutrum faucibus. Mauris imperdiet nec mi quis accumsan. Quisque tellus sem, pretium nec egestas nec, iaculis id massa. Suspendisse ligula elit, lobortis sit amet commodo sed, placerat in tellus.
        Mauris iaculis at leo ac rutrum. Quisque ullamcorper facilisis maximus. Fusce eget erat molestie, commodo enim sed, dapibus risus. In eleifend justo maximus sem euismod, quis ultrices eros porttitor. Proin tincidunt sit amet odio eget dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla ut odio sit amet metus efficitur tempor vel sed orci. Praesent pharetra orci lacinia, euismod felis eget, iaculis sem. Sed mauris sem, molestie ac sollicitudin vel, tempor accumsan nisi. Phasellus facilisis sit amet metus ut pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Vivamus quis erat est. In venenatis purus et risus ullamcorper commodo. Curabitur vestibulum gravida ullamcorper. Vestibulum dignissim felis non elit accumsan, a volutpat leo faucibus. Nam fringilla eros tellus, non dapibus tortor vestibulum eu. Vestibulum posuere luctus dui, non rhoncus ante laoreet vel. Nulla tristique faucibus auctor. Suspendisse lobortis ipsum enim, ut egestas sem efficitur id.
      </p>

      <p className="py-3 border-top mt-5">
        2023 mbiemann
      </p>

    </div>
  )
}