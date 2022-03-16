<template>
  <div>
    <div class="mt-10 divide-y divide-gray-200">
      <div class="space-y-1">
        <h3 class="text-lg leading-6 font-medium text-gray-900">Info</h3>
        <p class="max-w-2xl text-sm text-gray-500">
          General information about this job
        </p>
      </div>
      <div class="mt-6">
        <dl class="divide-y divide-gray-200">
          <div
            v-for="infoField in jobInfo"
            :key="infoField.key"
            class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"
          >
            <dt class="text-sm font-medium text-gray-500">
              {{ infoField.title }}
            </dt>
            <dd
              class="
                mt-1
                flex
                text-sm text-gray-900
                sm:mt-0 sm:col-span-2
                text-right
              "
            >
              <span
                class="flex-grow"
                >{{ job[infoField.key as keyof IJob] }}</span
              >
              <!-- <span class="ml-4 flex-shrink-0">
                <button
                  type="button"
                  class="
                    bg-white
                    rounded-md
                    font-medium
                    text-yellow-600
                    hover:text-yellow-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-yellow-500
                  "
                >
                  Update
                </button>
              </span> -->
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref } from 'vue';
import { IJob } from '../../types/Job';
// import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue';

// const automaticTimezoneEnabled = ref(true);
// const autoUpdateApplicantDataEnabled = ref(false);

const props = defineProps({
  job: {
    type: Object as PropType<IJob>,
    required: true,
  },
});

const jobInfo = [
  {
    key: 'title',
    title: 'Title',
  },
  {
    key: 'description',
    title: 'Description',
  },
  {
    key: 'firstName',
    title: 'Contact First Name',
  },
  {
    key: 'lastName',
    title: 'Contact Last Name',
  },
  {
    key: 'phone',
    title: 'Phone',
  },
  {
    key: 'email',
    title: 'Email',
  },
  {
    key: 'address',
    title: 'Address',
  },
  {
    key: 'city',
    title: 'City',
  },
  {
    key: 'state',
    title: 'State',
  },
  {
    key: 'zip',
    title: 'Zip',
  },
  {
    key: 'country',
    title: 'Country',
  },
];
</script>

<style></style>
