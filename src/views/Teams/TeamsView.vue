<script lang="ts" setup>
const teamsList = [
  {
    ID: '1',
    name: 'Marketing',
    description:
      'Marketing is the process of exploring, creating, and delivering value to meet the needs of a target market in terms of goods and services; potentially including selection of a target audience; selection of certain attributes or themes to emphasize in advertising; operation of advertising campaigns; attendance at trade shows and public events; design of products and packaging attractive to buyers; defining the terms of sale, such as price, discounts, warranty, and return policy; product placement in media or with people believed to influence the buying habits of others; agreements with retailers, wholesale distributors, or resellers; and attempts to create awareness of, loyalty to, and positive feelings about a brand. Marketing is typically done by the seller, typically a retailer or manufacturer. Sometimes tasks are contracted to a dedicated marketing firm or advertising agency. More rarely, a trade association or government agency (such as the Agricultural Marketing Service) advertises on behalf of an entire industry or locality, often a specific type of food (e.g. Got Milk?), food from a specific area, or a city or region as a tourism destination.',
    color: '#FABE37',
  },
  {
    ID: '2',
    name: 'HR',
    description:
      'Human resources is the set of people who make up the workforce of an organization, business sector, industry, or economy. A narrower concept is human capital, the knowledge and skills which the individuals command. Similar terms include manpower, labor, personnel, associates or simply: people.',
    color: '#F6866A',
  },
  {
    ID: '3',
    name: 'Developers',
    description:
      'A computer programmer, sometimes referred to as a software developer, a software engineer, a programmer, or more recently a coder (especially in more informal contexts), is a person who creates computer software.',
    color: '#59E6F6',
  },
  {
    ID: '4',
    name: 'Design',
    description:
      "User interface (UI) design or user interface engineering is the design of user interfaces for machines and software, such as computers, home appliances, mobile devices, and other electronic devices, with the focus on maximizing usability and the user experience. In computer or software design, user interface (UI) design is the process of building interfaces that are aesthetically pleasing. Designers aim to build interfaces that are easy and pleasant to use. UI design refers to graphical user interfaces and other forms of interface design. The goal of user interface design is to make the user's interaction as simple and efficient as possible, in terms of accomplishing user goals (user-centered design).",
    color: '#7661E2',
  },
]
</script>

<template>
  <div p-3xl class="c-slide-bottom">
    <div
      v-for="team in teamsList"
      :key="team.ID"
      :style="{ 'background-color': team.color }"
      class="mt-2em p-2em rounded-0.5em text-white transition-all-300 hover:shadow-xl hover:cursor-pointer hover:translate-y--2px"
    >
      <h1 class="text-1.25em">{{ team.name }}</h1>
      <p class="mt-1em lh-1.5em">{{ team.description }}</p>
    </div>
  </div>
</template>
