import React from "react";
import { Link } from "react-router-dom";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
function S11() {
    const matieres = [
        { name: "Analyse pour l’ingénieur", link: "/cours/analyse" },
        { name: "Probabilités", link: "/cours/probabilites" },
        { name: "Outils numériques pour l'ingénieur", link: "/cours/outils-numeriques" },
        { name: "Algorithmique et Programmation", link: "/cours/algorithmique" },
        { name: "Physique pour l'ingénieur", link: "/cours/physique" },
        { name: "Mécanique des fluides", link: "/cours/mecanique-fluides" },
        { name: "Circuits et systèmes électriques", link: "/cours/circuits-electriques" },
        { name: "Métrologie pour l'ingénieur", link: "/cours/metrologie" },
        { name: "Semi-conducteurs", link: "/cours/semi-conducteurs" },
        { name: "Systèmes mécaniques pour la Robotique", link: "/cours/systemes-mecaniques" },
        { name: "Anglais 1", link: "/cours/anglais-1" },
        { name: "Comptabilité et Gestion d’entreprise", link: "/cours/comptabilite-gestion" },
        { name: "Techniques de communication", link: "/cours/techniques-communication" },
    ];
    const columns = [
        {
            'label': 'Matieres',
            'field': 'name',
            'sort': 'asc'
        },
        {
            'label': 'Accéder au cours',
            'field': 'link',
            'sort': 'asc',
            fontSize:'30'
        }
        
    ];
    const headerCellStyle = {
        textAlign: 'center',
        border: '0.5px solid black',
        fontSize: '1.5rem',
        padding: '1cm'
    };
    const rowCellStyle = {
        textAlign: 'left',
        border: '0.5px solid black',
        fontSize: '1.5rem',
        padding: '1cm'
    };
    const rowCellStylebutton = {
        textAlign: 'center',
        border: '0.5px solid black',
        fontSize: '1.5rem',
        padding: '1cm'
    };
        
   
    return (
      
    <div>
          <body>
              <nav class="navbar navbar-expand-lg navbar-light stick</nav></nav>y-top">
                  <div class="imageBox">
                      <a href="index.html"><img src="logo.png" alt="image-box" class="logo" style={{ marginLeft: '1rem', width: '300px', height: '100' }} /></a>
                  </div>
                  <button class="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#nav"
                      aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon bg-light"></span>
                  </button>
                  <div class="collapse navbar-collapse justify-content-end" id="nav">
                      <ul class="navbar-nav">
                          <li class="item  "><Link to='/' class="link"><strong>ACCEUIL</strong> </Link> </li>
                          <li class="item "><Link to='/courses' class="link"><strong>COURS</strong></Link> </li>
                          <li class="item "><Link to='/exams' class="link"><strong>EXAMENS</strong></Link> </li>
                          <li class="item"><Link to='/about' class="link"><strong>A PROPOS</strong></Link> </li>
                          <li class="item"><Link to='/contact' class="link"><strong>CONTACT</strong></Link> </li>
                      </ul>
                  </div>
              </nav>
              <main>
                  <div class="container">
                        <h1 style={{ textAlign: 'center' }}><strong> Matières de  1ère année :Semestre 1</strong> </h1>
                      <br />
                        <br />
                        
                        
                        <MDBTable bordered borderColor="blue" style={{ margin: 'auto' }}>
                            <MDBTableHead>
                                <tr>
                                    <th scope="col" style={headerCellStyle}><strong> Matières </strong></th>
                                    <th scope="col" style={headerCellStyle}><strong>Accéder au cours</strong></th>

                                    
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody >
                                {matieres.map((matiere, index) => (
                                    <tr key={index}>
                                        <td style={rowCellStyle}><strong>{matiere.name}</strong></td>
                                        <td style={rowCellStylebutton}><Link to={matiere.link} className="inside-page__btn1">Accéder</Link></td>
                                    </tr>
                                ))}
                            </MDBTableBody>
                        </MDBTable>
                   
                    </div>
                    
             </main>
          </body>
    </div>
  );
}
export default S11;