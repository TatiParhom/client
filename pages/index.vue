<template>
    <main>
        <section class="videotitle">
            <video src="https://6bc41f582d60.vps.myjino.ru/uploads/Rainbow_Nebula_4_K_Motion_Background_094bbbdfd0.mp4" autoplay
                loop muted></video>

            <h1 class="title">Мир психологии и саморазвития!</h1>
        </section>
    </main>
</template>

<script setup>
    onMounted(() => initFlowbite())
</script>

<style scoped>
.videotitle {
    width: 100%;
    height: 100vh;
    position: relative;
}

.videotitle video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
}
.title {
    width: 100%;
    height: 100%;
    padding: auto;
    background-color: black;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 100px;
    color: white;
    mix-blend-mode: multiply;
}

</style>
