<template>
  <Navbar :links="main.links"><span class="text-primary">> # ~ / </span>valentinp.fr</Navbar>
  <IndexSection id="top" src="home.svg">
    <template v-slot:th1>Bienvenue 👋</template>
    Moi c'est <b>Valentin PUCCETTI</b> et je suis passionné d'<underline>administration système & réseau</underline> et de <underline>développement</underline>.<br>
    J'aime les nouvelles technologies et apprend actuellement à utiliser <underline>TensorFlow</underline>,
    un outil de machine learning.
    <template v-slot:btn>
      <btn class="btn-linkedin text-white" url="https://linkedin.com/in/valentin-p" icon="fab linkedin-in" >LinkedIn</btn>
      <btn class="btn-github text-white" url="https://github.com/itsmrval" icon="fab github" >GitHub</btn>
      <btn class="btn-outline-github" url="mailto:contact@valentinp.fr" icon="fa-regular fa-envelope">Me contacter</btn>
    </template>
  </IndexSection>

  <SkillsList id="skills" :skills="skills" />
  <ProjectsList id="projects" :projects="projects"/>
  <FormationsList id="formations" :formations="formations" />
  <Footer :links="main.socials"/>
</template>

<script>
import Navbar from "@/components/structure/Navbar.vue";
import Footer from "@/components/structure/Footer.vue";
import IndexSection from "@/components/index/IndexSection.vue";
import SkillsList from "@/components/skills/SkillsList.vue";
import FormationsList from "@/components/formations/FormationsList.vue";


import skills from "@/config/skills";
import main from "@/config/main";
import formations from "@/config/formations";
import projects from "@/config/projects"

import Btn from "@/components/structure/Btn.vue";
import Underline from "@/components/structure/Underline.vue";
import ProjectsList from "../components/projects/ProjectsList";

export default {
  data: () => {
    return { main, skills, formations, projects };
  },
  components: {ProjectsList,  Navbar, Footer, IndexSection, SkillsList, FormationsList, Btn, Underline },
};
</script>