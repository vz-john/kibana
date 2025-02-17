/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { ExpressionsSetup } from '@kbn/expressions-plugin/public';
import { getDatatable } from '../common/expressions/datatable/datatable';
import { datatableColumn } from '../common/expressions/datatable/datatable_column';
import { renameColumns } from '../common/expressions/rename_columns/rename_columns';
import { formatColumn } from '../common/expressions/format_column';
import { counterRate } from '../common/expressions/counter_rate';
import { getTimeScale } from '../common/expressions/time_scale/time_scale';

export const setupExpressions = (
  expressions: ExpressionsSetup,
  formatFactory: Parameters<typeof getDatatable>[0],
  getTimeZone: Parameters<typeof getTimeScale>[0]
) => {
  [
    counterRate,
    formatColumn,
    renameColumns,
    datatableColumn,
    getDatatable(formatFactory),
    getTimeScale(getTimeZone),
  ].forEach((expressionFn) => expressions.registerFunction(expressionFn));
};
