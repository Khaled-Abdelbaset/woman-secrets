<template>
  <div
    ref="dropdownRef"
    class="custom-select-box"
    :class="{ disabled: isDisabled }"
    :style="`width: ${boxWidth}`"
  >
    <div
      tabindex="0"
      class="select-box"
      :aria-expanded="isDropdownOpen.toString()"
      :aria-disabled="isDisabled.toString()"
      @click="toggleDropdown"
    >
      <div class="select-box-label">
        <p>
          <span><i :class="icon"></i></span>
          <span>{{ selectedOptionLabel || placeholder }}</span>
        </p>
        <span
          ><i
            :class="[`fa-solid fa-angle-${isDropdownOpen ? 'up' : 'down'}`]"
          ></i
        ></span>
      </div>
    </div>
    <DropdownOptions
      :options="options"
      :selectedOption="selectedOption"
      :isDropdownOpen="isDropdownOpen"
      @select="selectOption"
    />
  </div>
</template>

<script setup>
import { ref, computed, nextTick, watch, onMounted, onUnmounted } from "vue";
import DropdownSearch from "./DropdownOption.vue";
import DropdownOptions from "./DropdownOptions.vue";

const props = defineProps({
  options: {
    type: Array,
    default: () => [],
    required: true,
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  placeholder: {
    type: String,
    default: "options",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  boxWidth: {
    type: String,
    default: "100%",
  },
  icon: {
    type: String,
  },
});

const emit = defineEmits(["update:modelValue", "open", "close"]);

const dropdownRef = ref(null);
const isDropdownOpen = ref(false);
const selectedOption = ref(props.modelValue);

const isDisabled = computed(() => props.disabled);

const selectedOptionLabel = computed(() => {
  const selected = props.options.find(
    (option) => option.value === selectedOption.value
  );
  return selected ? selected.label || selected : "";
});

const toggleDropdown = () => {
  if (!isDisabled.value) {
    isDropdownOpen.value = !isDropdownOpen.value;
    if (isDropdownOpen.value) {
      nextTick(() => {
        const input = dropdownRef.value?.querySelector(".search-input");
        if (input) input.focus();
      });
    }
  }
};

const selectOption = (option) => {
  selectedOption.value = option.value;
  isDropdownOpen.value = false;
  emit("update:modelValue", option.value);
};

watch(
  () => props.modelValue,
  (newValue) => {
    selectedOption.value = newValue;
  }
);

watch(isDropdownOpen, () => {
  nextTick(() => {
    emit(isDropdownOpen.value ? "open" : "close");
  });
});

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isDropdownOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
.custom-select-box {
  display: inline-block;
  position: relative;
  width: 100%;
}

.custom-select-box.disabled .select-box {
  cursor: default;
}
.custom-select-box.disabled .select-box:focus {
  border: 1px solid var(--border-color);
}

.select-box {
  padding: 0.5rem 0.75rem;
  color: var(--secondary-color);
  border: 1px solid #80808081;
  border-radius: var(--primary-br-radius);
  transition: var(--transition);
  cursor: pointer;
}

.select-box:focus {
  border-color: var(--primary-color);
}

.select-box-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: normal !important;
}
.select-box-label p i {
  padding-right: 0.5rem;
}

.arrow {
  font-size: 12px;
}
</style>
