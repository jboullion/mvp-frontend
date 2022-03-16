<template>
  <form @submit.prevent="onSubmit" class="space-y-8 divide-y divide-gray-200">
    <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
      <div class="space-y-6 sm:space-y-5">
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            {{ props.formName }}
          </h3>
        </div>
        <div class="space-y-6 sm:space-y-5">
          <StringInput
            :name="'job-name'"
            :label="'Job Name'"
            v-model.trim="form.title"
            :type="'text'"
            :error="errors.title"
            maxlength="100"
            required
          />

          <StringInput
            :name="'description'"
            :label="'Description'"
            v-model.trim="form.description"
            :type="'text'"
            :error="errors.description"
            maxlength="255"
          />

          <StringInput
            :name="'first-name'"
            :label="'Contact First Name'"
            v-model.trim="form.firstName"
            :type="'text'"
            :error="errors.firstName"
            autocomplete="given-name"
            maxlength="50"
          />

          <StringInput
            :name="'last-name'"
            :label="'Contact Last Name'"
            v-model.trim="form.lastName"
            :type="'text'"
            :error="errors.lastName"
            autocomplete="family-name"
            maxlength="50"
          />

          <StringInput
            :name="'phone'"
            :label="'Phone'"
            v-model.trim="form.phone"
            :type="'text'"
            :error="errors.phone"
            autocomplete="tel"
            maxlength="50"
          />

          <StringInput
            :name="'email'"
            :label="'Email'"
            v-model.trim="form.email"
            :type="'email'"
            :error="errors.email"
            autocomplete="email"
            maxlength="100"
            required
          />

          <StringInput
            :name="'street-address'"
            :label="'Address'"
            v-model.trim="form.address"
            :type="'text'"
            :error="errors.address"
            autocomplete="street-address"
            maxlength="200"
          />

          <StringInput
            :name="'city'"
            :label="'City'"
            v-model.trim="form.city"
            :type="'text'"
            :error="errors.city"
            autocomplete="address-level2"
            maxlength="100"
          />

          <StringInput
            :name="'state'"
            :label="'State'"
            v-model.trim="form.state"
            :type="'text'"
            :error="errors.state"
            autocomplete="address-level1"
            maxlength="100"
          />

          <StringInput
            :name="'zip'"
            :label="'ZIP / Postal code'"
            v-model.trim="form.zip"
            :type="'text'"
            :error="errors.zip"
            autocomplete="postal-code"
            maxlength="100"
          />

          <DropdownSelect
            :name="'country'"
            :label="'Country'"
            v-model.trim="form.country"
            :options="[
              { label: 'United States', value: 'us' },
              { label: 'Canada', value: 'ca' },
              { label: 'Mexico', value: 'mex' },
            ]"
            :error="errors.country"
            autocomplete="country-name"
          />
        </div>
      </div>

      <!-- <div
              class="
                divide-y divide-gray-200
                pt-8
                space-y-6
                sm:pt-10 sm:space-y-5
              "
            >
              <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Notifications
                </h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">
                  We'll always let you know about important changes, but you
                  pick what else you want to hear about.
                </p>
              </div>
              <div class="space-y-6 sm:space-y-5 divide-y divide-gray-200">
                <div class="pt-6 sm:pt-5">
                  <div role="group" aria-labelledby="label-email">
                    <div
                      class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline"
                    >
                      <div>
                        <div
                          class="
                            text-base
                            font-medium
                            text-gray-900
                            sm:text-sm sm:text-gray-700
                          "
                          id="label-email"
                        >
                          By Email
                        </div>
                      </div>
                      <div class="mt-4 sm:mt-0 sm:col-span-2">
                        <div class="max-w-lg space-y-4">
                          <div class="relative flex items-start">
                            <div class="flex items-center h-5">
                              <input
                                id="comments"
                                name="comments"
                                type="checkbox"
                                class="
                                  focus:ring-yellow-500
                                  h-4
                                  w-4
                                  text-yellow-600
                                  border-gray-300
                                  rounded
                                "
                              />
                            </div>
                            <div class="ml-3 text-sm">
                              <label
                                for="comments"
                                class="font-medium text-gray-700"
                                >Comments</label
                              >
                              <p class="text-gray-500">
                                Get notified when someones posts a comment on a
                                posting.
                              </p>
                            </div>
                          </div>
                          <div>
                            <div class="relative flex items-start">
                              <div class="flex items-center h-5">
                                <input
                                  id="candidates"
                                  name="candidates"
                                  type="checkbox"
                                  class="
                                    focus:ring-yellow-500
                                    h-4
                                    w-4
                                    text-yellow-600
                                    border-gray-300
                                    rounded
                                  "
                                />
                              </div>
                              <div class="ml-3 text-sm">
                                <label
                                  for="candidates"
                                  class="font-medium text-gray-700"
                                  >Candidates</label
                                >
                                <p class="text-gray-500">
                                  Get notified when a candidate applies for a
                                  job.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div class="relative flex items-start">
                              <div class="flex items-center h-5">
                                <input
                                  id="offers"
                                  name="offers"
                                  type="checkbox"
                                  class="
                                    focus:ring-yellow-500
                                    h-4
                                    w-4
                                    text-yellow-600
                                    border-gray-300
                                    rounded
                                  "
                                />
                              </div>
                              <div class="ml-3 text-sm">
                                <label
                                  for="offers"
                                  class="font-medium text-gray-700"
                                  >Offers</label
                                >
                                <p class="text-gray-500">
                                  Get notified when a candidate accepts or
                                  rejects an offer.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pt-6 sm:pt-5">
                  <div role="group" aria-labelledby="label-notifications">
                    <div
                      class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline"
                    >
                      <div>
                        <div
                          class="
                            text-base
                            font-medium
                            text-gray-900
                            sm:text-sm sm:text-gray-700
                          "
                          id="label-notifications"
                        >
                          Push Notifications
                        </div>
                      </div>
                      <div class="sm:col-span-2">
                        <div class="max-w-lg">
                          <p class="text-sm text-gray-500">
                            These are delivered via SMS to your mobile phone.
                          </p>
                          <div class="mt-4 space-y-4">
                            <div class="flex items-center">
                              <input
                                id="push-everything"
                                name="push-notifications"
                                type="radio"
                                class="
                                  focus:ring-yellow-500
                                  h-4
                                  w-4
                                  text-yellow-600
                                  border-gray-300
                                "
                              />
                              <label
                                for="push-everything"
                                class="
                                  ml-3
                                  block
                                  text-sm
                                  font-medium
                                  text-gray-700
                                "
                              >
                                Everything
                              </label>
                            </div>
                            <div class="flex items-center">
                              <input
                                id="push-email"
                                name="push-notifications"
                                type="radio"
                                class="
                                  focus:ring-yellow-500
                                  h-4
                                  w-4
                                  text-yellow-600
                                  border-gray-300
                                "
                              />
                              <label
                                for="push-email"
                                class="
                                  ml-3
                                  block
                                  text-sm
                                  font-medium
                                  text-gray-700
                                "
                              >
                                Same as email
                              </label>
                            </div>
                            <div class="flex items-center">
                              <input
                                id="push-nothing"
                                name="push-notifications"
                                type="radio"
                                class="
                                  focus:ring-yellow-500
                                  h-4
                                  w-4
                                  text-yellow-600
                                  border-gray-300
                                "
                              />
                              <label
                                for="push-nothing"
                                class="
                                  ml-3
                                  block
                                  text-sm
                                  font-medium
                                  text-gray-700
                                "
                              >
                                No push notifications
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
    </div>

    <div class="pt-5">
      <div class="flex justify-end">
        <button
          type="button"
          class="
            bg-white
            py-2
            px-4
            border border-gray-300
            rounded-md
            shadow-sm
            text-sm
            font-medium
            text-gray-700
            hover:bg-gray-50
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-yellow-500
          "
        >
          Cancel
        </button>
        <button
          type="submit"
          class="
            ml-3
            inline-flex
            justify-center
            py-2
            px-4
            border border-transparent
            shadow-sm
            text-sm
            font-medium
            rounded-md
            text-white
            bg-yellow-600
            hover:bg-yellow-700
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-yellow-500
          "
        >
          Save
        </button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, reactive, PropType, onMounted } from 'vue';
import StringInput from '../ui/StringInput.vue';
import DropdownSelect from '../ui/DropdownSelect.vue';
import { IJob, IJobForm } from '../../types/Job';
import { EMAIL_REGEX } from '../../utils/validation';

const emit = defineEmits(['submitSuccess']);
const formValid = ref(true);
const form = reactive({
  title: '',
  description: '',
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  country: 'us',
}) as IJobForm;

const errors = reactive({
  title: '',
  description: '',
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  country: '',
});

const props = defineProps({
  formName: {
    type: String,
    required: true,
  },
  job: {
    type: Object as PropType<IJob>,
    required: false,
  },
  loading: {
    type: Boolean,
    required: false,
  },
});

async function onSubmit() {
  if (!form.title) {
    errors.title = 'Job Name is Required';
    formValid.value = false;
  }

  // if (!form.firstName) {
  //   errors.firstName = 'First Name is Required';
  // }
  // if (!form.lastName) {
  //   errors.lastName = 'Last Name is required';
  // }

  if (!form.email) {
    errors.email = 'Email is Required';
    formValid.value = false;
  } else if (!EMAIL_REGEX.test(form.email)) {
    errors.email = 'Email must be a valid email format';
    formValid.value = false;
  }

  // if (!form.address) {
  //   errors.address = 'Address is required';
  // }
  // if (!form.city) {
  //   errors.city = 'City is required';
  // }

  if (!formValid.value) return;

  emit('submitSuccess', form);
}

onMounted(async () => {
  if (props.job) {
    form.title = props.job.title;
    form.description = props.job.description;
    form.firstName = props.job.firstName;
    form.lastName = props.job.lastName;
    form.phone = props.job.phone;
    form.email = props.job.email;
    form.address = props.job.address;
    form.city = props.job.city;
    form.state = props.job.state;
    form.zip = props.job.zip;
  }
});
</script>

<style></style>
