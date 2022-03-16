<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="
            shadow
            overflow-hidden
            border-b border-gray-200
            sm:rounded-lg
            py-12
            px-4
            sm:px-6
            lg:px-8
          "
        >
          <div v-if="loading">Loading...</div>
          <div v-else-if="jobs.length">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Email
                  </th>
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="job in jobs" :key="job.title">
                  <td
                    class="
                      px-6
                      py-4
                      whitespace-nowrap
                      text-sm
                      font-medium
                      text-gray-900
                    "
                  >
                    <router-link :to="'/jobs/' + job.uuid">{{
                      job.title
                    }}</router-link>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ job.email }}
                  </td>
                  <td
                    class="
                      px-6
                      py-4
                      whitespace-nowrap
                      text-right text-sm
                      font-medium
                    "
                  >
                    <router-link
                      :to="'/jobs/' + job.uuid + '/edit'"
                      class="text-yellow-600 hover:text-yellow-900"
                      >Edit</router-link
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-else>No Jobs Found!</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AxiosError } from 'axios';
import { inject, onMounted, ref } from 'vue';
import JobService from '../../../services/JobService';
import { IJob } from '../../../types/Job';

const _jobService: JobService = inject('jobService') as JobService;

const jobs = ref<IJob[]>([]);
const loading = ref(true);

onMounted(async () => {
  try {
    jobs.value = await _jobService.getMyJobs();
  } catch (error: AxiosError | any) {
    if (error.response) {
      // Access to config, request, and response
      // TODO: Show this error
      console.log(error.response);
    } else {
      // TODO: Bugsnag this error
      console.log(error);
    }
  } finally {
    loading.value = false;
  }
});
</script>
