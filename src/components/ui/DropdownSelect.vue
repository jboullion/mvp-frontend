<template>
  <div
    class="
      sm:grid
      sm:grid-cols-3
      sm:gap-4
      sm:items-start
      sm:border-t
      sm:border-gray-200
      sm:pt-5
    "
  >
    <label class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
      {{ label }}
    </label>
    <div class="sm:col-span-2">
      <div class="mt-1 sm:mt-0 relative">
        <select
          :name="name"
          :id="name"
          :value="modelValue"
          @change="$emit('update:modelValue', ($event.target as HTMLFormElement).value)"
          v-bind="$attrs"
          class="
            max-w-lg
            block
            w-full
            shadow-sm
            sm:text-sm
            border-gray-300
            rounded-md
          "
          :class="{
            'border-red-300 focus:ring-red-500 focus:border-red-500': error,
            'focus:ring-yellow-500 focus:border-yellow-500': !error,
          }"
        >
          <option
            v-for="(option, index) in options"
            :key="option.value"
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </select>
        <div
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
            v-if="error"
            class="h-5 w-5 text-red-500"
            aria-hidden="true"
          />
        </div>
      </div>
      <p class="mt-2 text-sm text-red-600" v-if="error">{{ error }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ExclamationCircleIcon } from '@heroicons/vue/solid';
import { PropType } from 'vue';
import { DropdownOption } from '../../types/UI';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    default: '',
  },
  options: {
    type: Array as PropType<DropdownOption[]>,
    required: true,
  },
  required: {
    type: Boolean,
  },
  error: {
    type: String,
    default: '',
  },
});
</script>

<style lang="scss"></style>
