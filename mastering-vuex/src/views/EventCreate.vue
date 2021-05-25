<template>
    <div>
        <h1>Create Event {{ user.name}} </h1>
        <p>This event was created by {{ user.name}}</p>
        <p class="tags">Tags: </p>
        <ul class="tags categories">
            <li v-for="category in categories" :key="category"> {{ category }}</li>
        </ul>
        <p>There Are {{ categoriesLength }} Categories</p>
        <p class="details">ID: {{ user.id }}</p>
        <p>{{ localScopeMethodOne }}</p>

        <h2>Event Of The Day</h2>
        <p> Event: {{ getEventByID(2).title }}, Organised By: {{ getEventByID(2).organiser}}</p>

        <h2>Test ToDo's</h2>
        <p>There are currently {{ activeTodoCount }} Incomplete Todo's</p>

    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
    computed: {
        ...mapState(['user', 'categories']),
        ...mapGetters(['getEventByID', 'categoriesLength', 'activeTodoCount']),
        localScopeMethodOne() {
            return "This Is A Test";
        }
    }
}
</script>

<style>
    .details {
        font-style: italic;
        font-size: .75rem;
    }

    .categories {
        text-decoration: none;
        list-style: none;
        padding: 0px;
    }

    .categories li, .tags {
        display: inline;
        
    }

    .categories li::after {
        content: ", "
    }
</style>
