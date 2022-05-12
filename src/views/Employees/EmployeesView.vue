<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'

interface IEmployee {
  ID: number
  name: string
  avatarUrl: string
  introduction: string
  joinedTime: string
  department: string
  color: string
}

type TDeaprtment = 'HR' | 'Marketing' | 'Developers' | 'Design'

interface IDepartmentColorMap {
  HR: string
  Marketing: string
  Developers: string
  Design: string
}

const avatarUrls: string[] = [
  'https://tva1.sinaimg.cn/large/e6c9d24ely1h1wv868h3ej20u011hgoa.jpg',
  'https://tva1.sinaimg.cn/large/e6c9d24ely1h1wg8m1zloj208a08adfy.jpg',
  'https://tva1.sinaimg.cn/large/e6c9d24ely1h1wg8bcupyj208a08ajrg.jpg',
  'https://tva1.sinaimg.cn/large/e6c9d24ely1h1wg7myx4sj208a08adfz.jpg',
  'https://tva1.sinaimg.cn/large/e6c9d24ely1h23imw6qikj20b40b4wf5.jpg',
  'https://tva1.sinaimg.cn/large/e6c9d24ely1h23imnx9juj20u00u010p.jpg',
  'https://tva1.sinaimg.cn/large/e6c9d24ely1h23inq8p5hj20hm0hmgm7.jpg',
  'https://tva1.sinaimg.cn/large/e6c9d24ely1h23iomdz7fj20rh0kmdgt.jpg',
  'https://tva1.sinaimg.cn/large/e6c9d24ely1h23ioqlq34j20k00zkq4x.jpg',
  'https://tva1.sinaimg.cn/large/e6c9d24ely1h23iouy0ejj20k00jjwfz.jpg',
]

const departments: TDeaprtment[] = ['HR', 'Marketing', 'Developers', 'Design']

const names: string[] = [
  'Chuck',
  'Jennifer',
  'Steve',
  'Elon',
  'Mark',
  'Paul',
  'John',
  'Jane',
  'Mary',
  'Bob',
]

const departmentColorMap: IDepartmentColorMap = {
  Marketing: '#FABE37',
  HR: '#F6866A',
  Developers: '#59E6F6',
  Design: '#7661E2',
}

const generateRandomAvatarUrl = (): string => {
  const randomIndex: number = Math.floor(Math.random() * avatarUrls.length)
  return avatarUrls[randomIndex]
}

const generateRandomDepartment = (): TDeaprtment => {
  const randomIndex: number = Math.floor(Math.random() * departments.length)
  return departments[randomIndex]
}

const generateRandomName = (): string => {
  const randomIndex: number = Math.floor(Math.random() * names.length)
  return names[randomIndex]
}

const generateRandomEmployee = (): IEmployee => {
  const department: TDeaprtment = generateRandomDepartment()
  const color: string = departmentColorMap[department]
  return {
    color,
    department,
    ID: new Date().getTime(),
    name: generateRandomName(),
    avatarUrl: generateRandomAvatarUrl(),
    introduction: `${generateRandomName()} was born to a Canadian mother and White South African father, and raised in Pretoria, South Africa. He briefly attended the University of Pretoria before moving to Canada at age 17. He matriculated at Queen's University and transferred to the University of Pennsylvania two years later, where he received a bachelor's degree in Economics and Physics.`,
    joinedTime: new Date().toLocaleString(),
  }
}

const generateNumberNotification = (num: number) => {
  for (let i = 0; i < num; i++) {
    employees.value.push(generateRandomEmployee())
  }
}

const employees: Ref<IEmployee[]> = ref([])

onMounted(() => {
  generateNumberNotification(5)
})
</script>

<template>
  <div p-3xl class="c-slide-bottom">
    <div
      v-for="employee in employees"
      :key="employee.ID"
      class="flex mt-2em p-2em rounded-0.5em c-shadow transition-all-300 hover:cursor-pointer hover:translate-y--5px"
    >
      <img
        :src="employee.avatarUrl"
        :alt="employee.name"
        class="w-150px h-150px rounded-0.5em object-cover"
      />
      <div ml-2em flex-1>
        <div flex items-center justify-between>
          <p class="text-1.5em">{{ employee.name }}</p>
          <p class="font-bold c-color-tip">{{ employee.joinedTime }} joined</p>
          <p
            class="px-1em py-0.5em rounded-1em text-white font-bold"
            :style="{ 'background-color': employee.color }"
          >
            {{ employee.department }}
          </p>
        </div>

        <div mt-2em c-color-tip lh-2em>
          <p>{{ employee.introduction }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
