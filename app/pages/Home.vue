<template>
    <GridLayout ref="page"xmlns="http://schemas.nativescript.org/tns.xsd"  xmlns:chart="nativescript-ui-chart">
        <Label>  HOME TEST1</Label>
        
        <ScrollView>
            <GridLayout height="1000px">
                <RadCartesianChart row="0">
                    <BarSeries v-tkCartesianSeries :items="items" categoryProperty="type" valueProperty="count" />
                    <CategoricalAxis v-tkCartesianHorizontalAxis />
                    <LinearAxis v-tkCartesianVerticalAxis />
                </RadCartesianChart>
            </GridLayout>
        </ScrollView>
    </GridLayout>
</template>

<script>
import Vue from 'nativescript-vue';
import RadChartPlugin from 'nativescript-ui-chart/vue';

Vue.use(RadChartPlugin);

export default {
    name: 'Home',
    data() {
        return {
            items: [
                { type: "🍎", count: 7 },
                { type: "🍌", count: 15 },
                { type: "🍍", count: 12 },
                { type: "🍒", count: 30 },
                { type: "🍇", count: 16 }
            ]
        }
    },
    methods: {

    }
}
</script>