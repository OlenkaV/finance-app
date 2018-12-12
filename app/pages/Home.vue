<template>
    <GridLayout ref="page">
        
        <TabView :selectedIndex="selectedIndex">
            <TabViewItem title="Profit">
                <RadPieChart height="300" allowAnimation="true" row="0">
                    <PieSeries v-tkPieSeries
                        selectionMode="DataPoint"
                        expandRadius="0.4"
                        outerRadiusFactor="0.7"
                        valueProperty="amount"
                        legendLabel="title"
                        :items="profitByCategories" />

                    <RadLegendView v-tkPieLegend position="Right" title="Categories"
                        offsetOrigin="TopRight" width="110"
                        enableSelection="true"></RadLegendView>
                </RadPieChart>
            </TabViewItem>
            <TabViewItem title="Expenses">
                <RadPieChart height="300" allowAnimation="true" row="0">
                    <PieSeries v-tkPieSeries
                        selectionMode="DataPoint"
                        expandRadius="0.4"
                        outerRadiusFactor="0.7"
                        valueProperty="amount"
                        legendLabel="title"
                        :items="expensesByCategories" />

                    <RadLegendView v-tkPieLegend position="Right" title="Categories"
                        offsetOrigin="TopRight" width="110"
                        enableSelection="true"></RadLegendView>
                </RadPieChart>
            </TabViewItem>
            <TabViewItem title="Monthly">
                <RadCartesianChart seriesSelectionMode="Single">
                    <CategoricalAxis v-tkCartesianHorizontalAxis></CategoricalAxis>
                    <LinearAxis v-tkCartesianVerticalAxis></LinearAxis>
                    
                    <AreaSeries v-tkCartesianSeries
                        seriesName="Area"
                        legendTitle="Profit"
                        categoryProperty="month"
                        valueProperty="profitAmount"
                        legendLabel="Series type"
                        :items="monthly">
                    </AreaSeries>

                    <LineSeries v-tkCartesianSeries
                        seriesName="Line"
                        legendTitle="Expenses"
                        categoryProperty="month"
                        valueProperty="expensesAmount"
                        legendLabel="Series type"
                        :items="monthly">
                    </LineSeries>

                    <RadLegendView v-tkCartesianLegend position="Top" enableSelection="false"></RadLegendView>

                    <Palette v-tkCartesianPalette seriesName="Area">
                        <PaletteEntry v-tkCartesianPaletteEntry fillColor="#8033cc33" strokeColor="#33cc33"></PaletteEntry>
                    </Palette>

                    <Palette v-tkCartesianPalette seriesName="Line">
                        <PaletteEntry v-tkCartesianPaletteEntry fillColor="#ff3300" strokeColor="#ff3300"></PaletteEntry>
                    </Palette>
                </RadCartesianChart>
            </TabViewItem>
        </TabView>
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
            selectedIndex: 0
        }
    },
    computed: {
        profitByCategories() {
            return this.$store.state.statistic.profitByCategories;
        },
        expensesByCategories() {
            return this.$store.state.statistic.expensesByCategories;
        },
        monthly() {
            return this.$store.state.statistic.monthly;
        }
    },
    mounted() {
        this.$store.dispatch('statistic/fetchProfitByCategories');
        this.$store.dispatch('statistic/fetchExpensesByCategories');
        this.$store.dispatch('statistic/fetchMonthly');
    },
}
</script>