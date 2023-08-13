import { ExpandMore, Height } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import '../styles/accordion.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export const Client = () => {
  const styles = {
    accordion: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      boxShadow: 'none'
    },
    accordionSummary: {
      flexDirection: 'row'
    }
  }

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box display={'flex'} pt={9}
    
    >
<ul class="horizontal-accordion">
<label for="one">
  <li class="item">
  <input checked type="radio" name="accordion" id="one"/>

  <div class="item--container">
    <header class="item--header">
    <span class="item--header--icon"><i class="fa fa-compass"></i></span>
    <h4 class="item--header--title">Maîtrise d'ouvrage</h4>
    </header>

    <ul class="item--description">
    <li>Cahier des charges</li>
    <li>Spec fonctionnelle</li>
    <li>Spec technique</li>
    <li>Audit</li>
    <li>Gestion de projet</li>
    </ul>

    <footer class="item--footer">
    <a href="#"><i class="fa fa-angle-right"></i>En savoir plus</a>
    </footer>
  </div>

  </li>
</label>


<label for="two">
  <li class="item">
  <input type="radio" name="accordion" id="two"/>

  <div class="item--container">
    <header class="item--header">
    <span class="item--header--icon"><i class="fa fa-desktop"></i></span>
    <h4 class="item--header--title">Design</h4>
    </header>

    <ul class="item--description">
    <li>Wireframe</li>
    <li>Charte graphique</li>
    <li>Webdesign</li>
    <li>Logo</li>
    <li>Print</li>
    </ul>

    <footer class="item--footer">
    <a href="#"><i class="fa fa-angle-right"></i>En savoir plus</a>
    </footer>
  </div>
  </li>
</label>

<label for="three">
  <li class="item">
  <input type="radio" name="accordion" id="three"/>

  <div class="item--container">
    <header class="item--header">
    <span class="item--header--icon"><i class="fa fa-link"></i></span>
    <h4 class="item--header--title">Site internet</h4>
    </header>

    <ul class="item--description">
    <li>Site vitrine</li>
    <li>e-commerce</li>
    <li>Landing page</li>
    <li>Tourisme</li>
    <li>Immobilier</li>
    </ul>

    <footer class="item--footer">
    <a href="#"><i class="fa fa-angle-right"></i>En savoir plus</a>
    </footer>
  </div>
  </li>
</label>

<label for="four">
  <li class="item">
  <input type="radio" name="accordion" id="four"/>

  <div class="item--container">
    <header class="item--header">
    <span class="item--header--icon"><i class="fa fa-code"></i></span>
    <h4 class="item--header--title">Développement</h4>
    </header>

    <ul class="item--description">
    <li>Réseau social</li>
    <li>Extranet</li>
    <li>e-learning</li>
    <li>Crowdfounding</li>
    <li>Gaming</li>
    </ul>

    <footer class="item--footer">
    <a href="#"><i class="fa fa-angle-right"></i>En savoir plus</a>
    </footer>
  </div>
  </li>
</label>

<label for="five">
  <li class="item">
  <input type="radio" name="accordion" id="five"/>

  <div class="item--container">
    <header class="item--header">
    <span class="item--header--icon"><i class="fa fa-mobile"></i></span>
    <h4 class="item--header--title">Mobile</h4>
    </header>

    <ul class="item--description">
    <li>Responsive</li>
    <li>iOS/Android</li>
    <li>Hybride</li>
    <li>Dynamic services</li>
    <li>Optimisation</li>
    </ul>

    <footer class="item--footer">
    <a href="#"><i class="fa fa-angle-right"></i>En savoir plus</a>
    </footer>
  </div>
  </li>
</label>

<label for="six">
  <li class="item">
  <input type="radio" name="accordion" id="six"/>

  <div class="item--container">
    <header class="item--header">
    <span class="item--header--icon"><i class="fa fa-line-chart"></i></span>
    <h4 class="item--header--title">Webmarketing</h4>
    </header>

    <ul class="item--description">
    <li>Emailing/Newsletter</li>
    <li>Référencement naturel</li>
    <li>Référencement payant</li>
    <li>Référencement social</li>
    <li>Automation - reporting</li>
    </ul>

    <footer class="item--footer">
    <a href="#"><i class="fa fa-angle-right"></i>En savoir plus</a>
    </footer>
  </div>
  </li>
</label>

<label for="seven">
  <li class="item">
  <input type="radio" name="accordion" id="seven"/>

  <div class="item--container">
    <header class="item--header">
    <span class="item--header--icon"><i class="fa fa-server"></i></span>
    <h4 class="item--header--title">Hébergement</h4>
    </header>

    <ul class="item--description">
    <li>Mutualisé</li>
    <li>Dédié</li>
    <li>Sauvegarde</li>
    <li>Nom de domaine</li>
    <li>Email</li>
    </ul>

    <footer class="item--footer">
    <a href="#"><i class="fa fa-angle-right"></i>En savoir plus</a>
    </footer>
  </div>
  </li>
</label>
</ul>

      
    
    </Box>
  )
}
