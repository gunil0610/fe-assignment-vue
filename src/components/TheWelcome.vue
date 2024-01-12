<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-vue-next";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useStore } from "vuex";
import { key } from "@/store";
import { ref } from "vue";
import dayjs from "dayjs";
import { cn } from "@/lib/utils";

const store = useStore(key);
const onEdit = ref(false);
const text = ref("");

const date = ref<Date>(new Date());

function toggleOnEdit(e: Event) {
  onEdit.value = !onEdit.value;
}

function onCategoryChange(event: Event) {
  const el = event.target as HTMLSelectElement;
  store.commit("setCategory", {
    category: el.value,
  });
}

function onChangeInput(event: Event) {
  const el = event.target as HTMLInputElement;

  // query
  console.log(el.value);
}
</script>

<template>
  <div class="flex gap-2 w-full">
    <Select v-model="store.state.category" @change="onCategoryChange($event)">
      <SelectTrigger class="max-w-40">
        <SelectValue placeholder="선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <!-- Vuex로 관리 -->
          <SelectItem value="title">제목</SelectItem>
          <SelectItem value="description">설명</SelectItem>
          <SelectItem value="status">상태</SelectItem>
          <SelectItem value="createdAt">날짜</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    <Input
      placeholder="검색어를 입력하세요."
      v-model="text"
      @change="onChangeInput"
    />
  </div>

  <!-- Add button -->
  <div class="w-full">
    <div
      v-if="onEdit"
      class="w-full flex flex-col gap-4 p-6 bg-zinc-100 rounded-xl"
    >
      <Input placeholder="제목을 입력하세요." />
      <Input placeholder="설명을 입력하세요." />

      <div class="w-full flex gap-4">
        <Popover class="flex-1">
          <PopoverTrigger as-child>
            <Button
              :variant="'outline'"
              :class="
                cn(
                  'justify-start text-left font-normal w-full',
                  !date && 'text-muted-foreground'
                )
              "
            >
              <CalendarIcon class="mr-2 h-4 w-4" />
              <span>{{
                date ? dayjs(date).format("YYYY.MM.DD") : "Pick a date"
              }}</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent class="w-auto p-0">
            <Calendar v-model="date" />
          </PopoverContent>
        </Popover>

        <Select>
          <SelectTrigger class="max-w-40">
            <SelectValue placeholder="선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="title">제목</SelectItem>
              <SelectItem value="description">설명</SelectItem>
              <SelectItem value="status">상태</SelectItem>
              <SelectItem value="createdAt">날짜</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div class="w-full flex gap-4">
        <Button class="flex-1">추가</Button>
        <Button
          variant="destructive"
          class="flex-1 max-w-40"
          @click="toggleOnEdit"
          >취소</Button
        >
      </div>
    </div>
    <Button v-else class="w-full py-6" @click="toggleOnEdit">+</Button>
  </div>

  <!-- TODOS  -->
</template>
