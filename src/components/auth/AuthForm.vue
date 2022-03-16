<template>
  <form class="space-y-6" @submit.prevent="onSubmit">
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">
        Email address
      </label>
      <div class="mt-1 relative">
        <input
          id="email"
          name="email"
          type="email"
          v-model.trim="form.email"
          autocomplete="email"
          novalidate
          class="
            appearance-none
            block
            w-full
            px-3
            py-2
            border border-gray-300
            rounded-md
            shadow-sm
            placeholder-gray-400
            focus:outline-none
            sm:text-sm
          "
          :class="{
            'border-red-300 focus:ring-red-500 focus:border-red-500':
              errors.email,
            'focus:ring-black focus:black': !errors.email,
          }"
        />
        <div
          v-if="errors.email"
          class="
            absolute
            inset-y-0
            right-0
            pr-3
            flex
            items-center
            pointer-events-none
          "
        >
          <ExclamationCircleIcon
            class="h-5 w-5 text-red-500"
            aria-hidden="true"
          />
        </div>
      </div>
      <p class="mt-2 text-sm text-red-600" v-if="errors.email">
        {{ errors.email }}
      </p>
    </div>

    <div>
      <label for="password" class="block text-sm font-medium text-gray-700">
        Password
      </label>
      <div class="mt-1 relative">
        <input
          id="password"
          name="password"
          type="password"
          v-model.trim="form.password"
          autocomplete="current-password"
          class="
            appearance-none
            block
            w-full
            px-3
            py-2
            border border-gray-300
            rounded-md
            shadow-sm
            placeholder-gray-400
            focus:outline-none
            sm:text-sm
          "
          :class="{
            'border-red-300 focus:ring-red-500 focus:border-red-500':
              errors.password,
            'focus:ring-black focus:black': !errors.password,
          }"
        />
        <div
          v-if="errors.password"
          class="
            absolute
            inset-y-0
            right-0
            pr-3
            flex
            items-center
            pointer-events-none
          "
        >
          <ExclamationCircleIcon
            class="h-5 w-5 text-red-500"
            aria-hidden="true"
          />
        </div>
      </div>
      <p class="mt-2 text-sm text-red-600" v-if="errors.password">
        {{ errors.password }}
      </p>
    </div>

    <div class="flex items-center justify-between" v-if="login">
      <div class="flex items-center">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          class="
            h-4
            w-4
            text-green-600
            focus:ring-black
            border-gray-300
            rounded
          "
        />
        <label for="remember-me" class="ml-2 block text-sm text-gray-900">
          Remember me
        </label>
      </div>

      <div class="text-sm">
        <a href="#" class="font-medium text-green-600 hover:text-green-500">
          Forgot your password?
        </a>
      </div>
    </div>

    <div>
      <button
        type="submit"
        class="
          w-full
          flex
          justify-center
          py-2
          px-4
          border border-transparent
          rounded-md
          shadow-sm
          text-sm
          font-medium
          text-white
          bg-yellow-500
          hover:bg-yellow-400
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black
        "
      >
        <span v-if="loading">
          <SpinnerIcon />
        </span>
        <span v-else>{{ login ? 'Sign In' : 'Create Account' }}</span>
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { ExclamationCircleIcon } from '@heroicons/vue/solid';
import { EMAIL_REGEX } from '../../utils/validation';
import SpinnerIcon from '../icons/SpinnerIcon.vue';

const props = defineProps({
  login: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['submitSuccess']);

const form = reactive({
  email: '',
  password: '',
});

const errors = reactive({
  email: '',
  password: '',
});

const formValid = ref(true);

function onSubmit() {
  if (!form.email) {
    errors.email = 'Email is Required';
    formValid.value = false;
  } else if (!EMAIL_REGEX.test(form.email)) {
    errors.email = 'Email must be a valid email format';
    formValid.value = false;
  }

  if (!form.password) {
    errors.password = 'Password is Required';
    formValid.value = false;
  } else if (form.password.length < 8) {
    errors.password = 'Password must be at least 8 characters long';
    formValid.value = false;
  }

  // ? NOTE: Currently more more specific validation is handled by the server, at the client level we are just confirming we have something to submit

  if (!formValid.value) return;

  emit('submitSuccess', form);
}
</script>

<style></style>
