<template>
  <div>
    <div class="lg:hidden">
      <label for="selected-tab" class="sr-only">Select a tab</label>
      <select
        id="selected-tab"
        name="selected-tab"
        class="
          mt-1
          block
          w-full
          pl-3
          pr-10
          py-2
          text-base
          border-gray-300
          focus:outline-none focus:ring-yellow-500 focus:border-yellow-500
          sm:text-sm
          rounded-md
        "
      >
        <option
          v-for="tab in tabs"
          :key="tab.name"
          :selected="isActive(tab.target)"
        >
          {{ tab.name }}
        </option>
      </select>
    </div>
    <div class="hidden lg:block">
      <div class="border-b border-gray-200">
        <nav>
          <ul class="-mb-px flex space-x-8">
            <li
              v-for="tab in tabs"
              :key="tab.name"
              :class="[
                isActive(tab.target)
                  ? 'border-yellow-500 text-yellow-600'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                'border-b-2',
              ]"
            >
              <button
                @click="switchTab(tab.target)"
                class="whitespace-nowrap py-4 px-1 font-medium text-sm"
              >
                {{ tab.name }}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { ITabNav } from '../../types/UI';

const props = defineProps({
  tabs: {
    type: Array as PropType<ITabNav[]>,
    required: true,
  },
  activeTab: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['switchTab']);

function isActive(target: string) {
  return props.activeTab === target;
}

function switchTab(newTab: string) {
  emit('switchTab', newTab);
}
</script>

<style></style>
