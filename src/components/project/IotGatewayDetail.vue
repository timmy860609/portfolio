<script setup lang="ts">
import {
  iotGatewayContentSections,
  iotGatewayCover,
  iotGatewayGoals,
  iotGatewayHero,
} from '../../data/project/iotGatewayProject';
import { getProjectPagination } from '../../data/project/projectPagination';
import StandardProjectDetail from './StandardProjectDetail.vue';

const pagination = getProjectPagination('iot-backend');
</script>

<template>
  <StandardProjectDetail
    :cover="iotGatewayCover"
    :hero="iotGatewayHero"
    :goals="iotGatewayGoals"
    :sections="iotGatewayContentSections"
    :pagination="pagination"
    goals-after-first-section
  />
</template>
