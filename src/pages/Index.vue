<template>
  <Layout>
    <Hero />
    <ProjectSection />
    <section class="projects">
      <!-- <article
        @click="goTo($event, project.node.path)"
        class="project"
        v-for="project in $page.projects.edges"
        :key="project.node.id"
      >
        <g-image
          class="project-thumbnail"
          :src="project.node.thumbnail.src"
          :alt="project.node.title"
        ></g-image>
        <ProjectMeta
          :title="project.node.title"
          :categories="project.node.categories"
          :year="project.node.year"
        />
      </article> -->
    </section>
    <FAQSection />
    <FooterBottom />
  </Layout>
</template>

<page-query>
query Projects {
  projects: allProject {
    edges {
      node { 
        id
        path
        title
        year
        thumbnail
        categories
      }
    }
  }
}
</page-query>

<script>
import ProjectMeta from '@/components/ProjectMeta'
import Hero from '@/components/Hero'
import FAQSection from '@/components/FAQSection'
import ProjectSection from '@/components/ProjectSection'
import FooterBottom from '@/components/FooterBottom'

export default {
  components: {
    FooterBottom,
    Hero,
    FAQSection,
    ProjectMeta,
    ProjectSection,
  },
  metaInfo: {
    titleTemplate: require('../data/theme.json').site_name,
  },
  methods: {
    goTo(event, route) {
      const distanceScrolled = window.pageYOffset
      const elementPosition = event.target.getBoundingClientRect().top
      const totalOffset = distanceScrolled + elementPosition
      const finalPosition = totalOffset - 167

      // Scroll window so that the thumbnail is 12rem from the
      // top of the browser window, this will make a seamless transition.
      window.scrollTo({ top: finalPosition, behavior: 'smooth' })

      // Now, navigate to the project page
      setTimeout(() => {
        this.$router.push(route)
      }, 450)
    },
  },
}
</script>

<style lang="scss" scoped>
.projects {
  margin: 0 2rem;
}
.project {
  width: 100%;
  margin-bottom: 4rem;
  cursor: pointer;
}
.project-thumbnail {
  display: block;
  width: 100%;
}
</style>
