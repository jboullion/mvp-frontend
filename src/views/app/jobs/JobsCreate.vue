<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <JobForm
        :formName="'Create Job'"
        :loading="loading"
        @submitSuccess="createJob"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { AxiosError } from 'axios';
import { inject, reactive, ref } from 'vue';
import JobService from '../../../services/JobService';
import { IJob, IJobForm, IJobSubmit } from '../../../types/Job';
import JobForm from '../../../components/jobs/JobForm.vue';
import { useRouter } from 'vue-router';

const $router = useRouter();

const _jobService: JobService = inject('jobService') as JobService;

const job = ref<IJob>();
const loading = ref(false);

async function createJob(form: IJobForm) {
  try {
    loading.value = true;

    const jobCreate: IJobSubmit = {
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
    };

    job.value = await _jobService.createJob(jobCreate);

    if (job.value.uuid) {
      $router.push({ path: '/jobs/' + job.value.uuid });
    } else {
      //Bugsnag.notify(new Error('No access token returned'));
    }
  } catch (error: AxiosError | any) {
    if (error.response) {
      // Access to config, request, and response
      console.log(error.response);
    } else {
      console.log(error);
    }
  } finally {
    loading.value = false;
  }
}
</script>

<style lang="scss"></style>
