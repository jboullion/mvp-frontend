<template>
  <template v-for="item in navigation" :key="item.name">
    <div v-if="!item.children">
      <router-link
        :to="item.to"
        class="
          group
          w-full
          flex
          items-center
          pl-2
          py-2
          text-sm
          font-medium
          rounded-md
        "
      >
        <component
          :is="item.icon"
          class="nav-svg mr-3 flex-shrink-0 h-6 w-6"
          aria-hidden="true"
        />
        {{ item.name }}
      </router-link>
    </div>
    <Disclosure as="div" v-else class="space-y-1" v-slot="{ open }">
      <DisclosureButton
        class="
          group
          w-full
          flex
          items-center
          pl-2
          pr-1
          py-2
          text-left text-sm
          font-medium
          rounded-md
          focus:outline-none focus:ring-2 focus:ring-yellow-500
        "
      >
        <component
          :is="item.icon"
          class="
            mr-3
            flex-shrink-0
            h-6
            w-6
            text-gray-400
            group-hover:text-gray-500
          "
          aria-hidden="true"
        />
        <span class="flex-1">
          {{ item.name }}
        </span>
        <svg
          :class="[
            open ? 'text-gray-400 rotate-90' : 'text-gray-300',
            'ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150',
          ]"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
        </svg>
      </DisclosureButton>
      <DisclosurePanel class="space-y-1">
        <router-link
          v-for="subItem in item.children"
          :key="subItem.name"
          :to="subItem.to"
          class="
            group
            w-full
            flex
            items-center
            pl-11
            pr-2
            py-2
            text-sm
            font-medium
            text-gray-600
            rounded-md
            hover:text-gray-900 hover:bg-gray-50
          "
        >
          {{ subItem.name }}
        </router-link>
      </DisclosurePanel>
    </Disclosure>
  </template>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { NavigationItem } from '../../types/UI';

const props = defineProps({
  navigation: {
    type: Array as PropType<NavigationItem[]>,
    required: true,
  },
});
</script>

<style scoped>
.group {
  @apply bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900;
}

.group .nav-svg {
  @apply text-gray-400 group-hover:text-gray-500;
}

.group.router-link-active {
  @apply bg-gray-100 text-gray-900;
}

.group.router-link-active .nav-svg {
  @apply text-gray-500;
}
</style>
