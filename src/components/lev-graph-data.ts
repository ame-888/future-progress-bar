export type LevDataPoint = {
  year: number;
  lifespanGain: number;
  healthspanGain?: number;
};

export const LEV_DATA: LevDataPoint[] = [
  { year: 2001, lifespanGain: 0.4, healthspanGain: 0.3 },
  { year: 2002, lifespanGain: 0.3, healthspanGain: 0.2 },
  { year: 2003, lifespanGain: 0.3, healthspanGain: 0.3 },
  { year: 2004, lifespanGain: 0.3, healthspanGain: 0.3 },
  { year: 2005, lifespanGain: 0.4, healthspanGain: 0.3 },
  { year: 2006, lifespanGain: 0.5, healthspanGain: 0.5 },
  { year: 2007, lifespanGain: 0.4, healthspanGain: 0.4 },
  { year: 2008, lifespanGain: 0.3, healthspanGain: 0.2 },
  { year: 2009, lifespanGain: 0.4, healthspanGain: 0.5 },
  { year: 2010, lifespanGain: 0.4, healthspanGain: 0.2 },
  { year: 2011, lifespanGain: 0.3, healthspanGain: 0.4 },
  { year: 2012, lifespanGain: 0.4, healthspanGain: 0.3 },
  { year: 2013, lifespanGain: 0.3, healthspanGain: 0.3 },
  { year: 2014, lifespanGain: 0.3, healthspanGain: 0.2 },
  { year: 2015, lifespanGain: 0.2, healthspanGain: 0.2 },
  { year: 2016, lifespanGain: 0.3, healthspanGain: 0.2 },
  { year: 2017, lifespanGain: 0.2, healthspanGain: 0.2 },
  { year: 2018, lifespanGain: 0.3, healthspanGain: 0.2 },
  { year: 2019, lifespanGain: 0.2, healthspanGain: 0.2 },
  { year: 2020, lifespanGain: -0.7, healthspanGain: -0.7 },
  { year: 2021, lifespanGain: -1.0, healthspanGain: -0.9 },
  { year: 2022, lifespanGain: 1.7 },
  { year: 2023, lifespanGain: 0.6 },
];