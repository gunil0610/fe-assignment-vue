<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
</script>

<template>
  <div class="flex gap-2 w-full">
    <Select>
      <SelectTrigger>
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
    <Input />
  </div>

  <!-- Add button -->
  <div class="w-full">
    <Button class="w-full py-6">+</Button>
  </div>

  <!-- TODOS  -->
</template>
