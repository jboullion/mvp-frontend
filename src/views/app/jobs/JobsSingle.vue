<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div v-if="loading">Loading...</div>
      <div v-else-if="!loading && job">
        <div class="px-4 sm:px-6 md:px-0">
          <h1 class="text-3xl font-extrabold text-gray-900">{{ job.title }}</h1>
        </div>
        <div class="px-4 sm:px-6 md:px-0">
          <div class="py-6">
            <TabNav
              :tabs="tabs"
              :activeTab="activeTab"
              @switchTab="switchTab"
            />

            <!-- TODO: Should we convert to a dynamic component? <component :is=""> -->
            <JobInfo v-show="activeTab === 'job-info'" :job="job" />
            <JobMaterials v-show="activeTab === 'job-materials'" :job="job" />
            <JobChecklist v-show="activeTab === 'job-checklist'" :job="job" />
            <JobCosts v-show="activeTab === 'job-costs'" :job="job" />
            <JobTime v-show="activeTab === 'job-time'" :job="job" />
            <JobTeam v-show="activeTab === 'job-team'" :job="job" />
          </div>
        </div>
      </div>
      <div v-else="!loading && !job">Job not found!</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import JobService from '../../../services/JobService';
import { IJob } from '../../../types/Job';
import TabNav from '../../../components/common/TabNav.vue';
import { ITabNav } from '../../../types/UI';
import JobInfo from '../../../components/jobs/JobInfo.vue';
import JobMaterials from '../../../components/jobs/JobMaterials.vue';
import JobChecklist from '../../../components/jobs/JobChecklist.vue';
import JobCosts from '../../../components/jobs/JobCosts.vue';
import JobTime from '../../../components/jobs/JobTime.vue';
import JobTeam from '../../../components/jobs/JobTeam.vue';

const tabs: ITabNav[] = [
  { name: 'Info', target: 'job-info' },
  { name: 'Materials', target: 'job-materials' },
  { name: 'Checklist', target: 'job-checklist' },
  { name: 'Costs', target: 'job-costs' },
  { name: 'Time', target: 'job-time' },
  { name: 'Team', target: 'job-team' },
];

const activeTab = ref('job-info');

const $route = useRoute();

const _jobService: JobService = inject('jobService') as JobService;

const loading = ref(true);
const jobId: string = $route.params.id as string;
const job = ref<IJob>();

onMounted(async () => {
  job.value = await _jobService.getJob(jobId);
  loading.value = false;
});

function switchTab(newTab: string) {
  activeTab.value = newTab;
}
</script>

<style></style>
