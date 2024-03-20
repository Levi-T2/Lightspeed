<template>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasRightLabel">Unit Details</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div v-if="unitDetails">
                <h3>{{ unitDetails.name }}</h3>
                <p>{{ unitDetails.defense }}</p>
                <p>{{ unitDetails.health }}</p>
                <p>{{ unitDetails.attackPower }}</p>
            </div>
        </div>
    </div>
</template>


<script setup>
import { gridUnit } from '@/services/Raycaster.js'

const unitDetails = gridUnit

</script>


<style lang="scss" scoped></style>