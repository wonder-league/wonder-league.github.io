<template>
  <section id="gironi" class="section section--alt">
    <div class="container">
      <h2 class="section__title">Gironi</h2>

      <div class="grid-2">
        <div v-for="group in groups" :key="group.name" class="group">
          <h3 class="group__name">{{ group.name }}</h3>
          <div class="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Squadra</th>
                  <th title="Partite giocate">G</th>
                  <th title="Vittorie">V</th>
                  <th title="Pareggi">P</th>
                  <th title="Sconfitte">S</th>
                  <th title="Gol fatti">GF</th>
                  <th title="Gol subiti">GS</th>
                  <th title="Punti">Pts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="team in group.teams" :key="team.name">
                  <td>{{ team.name }}</td>
                  <td>{{ team.g }}</td>
                  <td>{{ team.v }}</td>
                  <td>{{ team.p }}</td>
                  <td>{{ team.s }}</td>
                  <td>{{ team.gf }}</td>
                  <td>{{ team.ga }}</td>
                  <td><strong>{{ team.pts }}</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  groups: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped>
.group__name {
  font-size: 1.1rem;
  color: var(--color-primary);
  margin-bottom: var(--space-sm);
}

.table-wrapper {
  overflow-x: auto;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}

table {
  min-width: 360px;
}
</style>
