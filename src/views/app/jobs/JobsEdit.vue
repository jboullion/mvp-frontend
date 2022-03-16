<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div v-if="loading">Loading...</div>
      <div v-else-if="job">
        <JobForm
          :formName="'Edit Job'"
          :job="job"
          :loading="loading"
          @submitSuccess="updateJob"
        />
      </div>
      <div v-else>Job not found!</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AxiosError } from 'axios';
import { inject, ref, onMounted } from 'vue';
import JobService from '../../../services/JobService';
import { IJob, IJobSubmit, IJobForm } from '../../../types/Job';
import JobForm from '../../../components/jobs/JobForm.vue';
import { useRoute } from 'vue-router';

import { useRouter } from 'vue-router';

const $router = useRouter();
const $route = useRoute();

const _jobService: JobService = inject('jobService') as JobService;

const jobId: string = $route.params.id as string;
const job = ref<IJob>();
const loading = ref(true);

async function updateJob(form: IJobForm) {
  try {
    loading.value = true;

    const jobUpdate: IJobSubmit = {
      title: form.title,
      description: form.description,
      firstName: form.firstName,
      lastName: form.lastName,
      phone: form.phone,
      email: form.email,
      address: form.address,
      city: form.city,
      state: form.state,
      zip: form.zip,
      country: form.country,
    };

    job.value = await _jobService.updateJob(jobId, jobUpdate);

    if (job.value.uuid) {
      $router.push({ path: '/jobs/' + job.value.uuid });
    } else {
      //Bugsnag.notify(new Error('No access token returned'));
    }
  } catch (error: AxiosError | any) {
    if (error.response) {
      // Access to config, request, and response
      // TODO: Display error
      console.log(error.response);
    } else {
      // TODO: Bugsnag
      console.log(error);
    }
  } finally {
    loading.value = false;
  }
}

onMounted(async () => {
  job.value = await _jobService.getJob(jobId);
  loading.value = false;
});
</script>

<style lang="scss"></style>
