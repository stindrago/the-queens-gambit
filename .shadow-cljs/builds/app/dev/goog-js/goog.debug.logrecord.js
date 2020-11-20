["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/debug/logrecord.js"],"~:js","goog.provide(\"goog.debug.LogRecord\");\ngoog.debug.LogRecord = function(level, msg, loggerName, opt_time, opt_sequenceNumber) {\n  this.reset(level, msg, loggerName, opt_time, opt_sequenceNumber);\n};\ngoog.debug.LogRecord.prototype.time_;\ngoog.debug.LogRecord.prototype.level_;\ngoog.debug.LogRecord.prototype.msg_;\ngoog.debug.LogRecord.prototype.loggerName_;\ngoog.debug.LogRecord.prototype.sequenceNumber_ = 0;\ngoog.debug.LogRecord.prototype.exception_ = null;\ngoog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS = goog.define(\"goog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS\", true);\ngoog.debug.LogRecord.nextSequenceNumber_ = 0;\ngoog.debug.LogRecord.prototype.reset = function(level, msg, loggerName, opt_time, opt_sequenceNumber) {\n  if (goog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS) {\n    this.sequenceNumber_ = typeof opt_sequenceNumber == \"number\" ? opt_sequenceNumber : goog.debug.LogRecord.nextSequenceNumber_++;\n  }\n  this.time_ = opt_time || goog.now();\n  this.level_ = level;\n  this.msg_ = msg;\n  this.loggerName_ = loggerName;\n  delete this.exception_;\n};\ngoog.debug.LogRecord.prototype.getLoggerName = function() {\n  return this.loggerName_;\n};\ngoog.debug.LogRecord.prototype.getException = function() {\n  return this.exception_;\n};\ngoog.debug.LogRecord.prototype.setException = function(exception) {\n  this.exception_ = exception;\n};\ngoog.debug.LogRecord.prototype.setLoggerName = function(loggerName) {\n  this.loggerName_ = loggerName;\n};\ngoog.debug.LogRecord.prototype.getLevel = function() {\n  return this.level_;\n};\ngoog.debug.LogRecord.prototype.setLevel = function(level) {\n  this.level_ = level;\n};\ngoog.debug.LogRecord.prototype.getMessage = function() {\n  return this.msg_;\n};\ngoog.debug.LogRecord.prototype.setMessage = function(msg) {\n  this.msg_ = msg;\n};\ngoog.debug.LogRecord.prototype.getMillis = function() {\n  return this.time_;\n};\ngoog.debug.LogRecord.prototype.setMillis = function(time) {\n  this.time_ = time;\n};\ngoog.debug.LogRecord.prototype.getSequenceNumber = function() {\n  return this.sequenceNumber_;\n};\n","~:source","// Copyright 2006 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Definition of the LogRecord class. Please minimize\n * dependencies this file has on other closure classes as any dependency it\n * takes won't be able to use the logging infrastructure.\n *\n */\n\ngoog.provide('goog.debug.LogRecord');\n\n\n\n/**\n * LogRecord objects are used to pass logging requests between\n * the logging framework and individual log Handlers.\n * @constructor\n * @param {goog.debug.Logger.Level} level One of the level identifiers.\n * @param {string} msg The string message.\n * @param {string} loggerName The name of the source logger.\n * @param {number=} opt_time Time this log record was created if other than now.\n *     If 0, we use #goog.now.\n * @param {number=} opt_sequenceNumber Sequence number of this log record. This\n *     should only be passed in when restoring a log record from persistence.\n */\ngoog.debug.LogRecord = function(\n    level, msg, loggerName, opt_time, opt_sequenceNumber) {\n  this.reset(level, msg, loggerName, opt_time, opt_sequenceNumber);\n};\n\n\n/**\n * Time the LogRecord was created.\n * @type {number}\n * @private\n */\ngoog.debug.LogRecord.prototype.time_;\n\n\n/**\n * Level of the LogRecord\n * @type {goog.debug.Logger.Level}\n * @private\n */\ngoog.debug.LogRecord.prototype.level_;\n\n\n/**\n * Message associated with the record\n * @type {string}\n * @private\n */\ngoog.debug.LogRecord.prototype.msg_;\n\n\n/**\n * Name of the logger that created the record.\n * @type {string}\n * @private\n */\ngoog.debug.LogRecord.prototype.loggerName_;\n\n\n/**\n * Sequence number for the LogRecord. Each record has a unique sequence number\n * that is greater than all log records created before it.\n * @type {number}\n * @private\n */\ngoog.debug.LogRecord.prototype.sequenceNumber_ = 0;\n\n\n/**\n * Exception associated with the record\n * @type {?Object}\n * @private\n */\ngoog.debug.LogRecord.prototype.exception_ = null;\n\n\n/**\n * @define {boolean} Whether to enable log sequence numbers.\n */\ngoog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS =\n    goog.define('goog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS', true);\n\n\n/**\n * A sequence counter for assigning increasing sequence numbers to LogRecord\n * objects.\n * @type {number}\n * @private\n */\ngoog.debug.LogRecord.nextSequenceNumber_ = 0;\n\n\n/**\n * Sets all fields of the log record.\n * @param {goog.debug.Logger.Level} level One of the level identifiers.\n * @param {string} msg The string message.\n * @param {string} loggerName The name of the source logger.\n * @param {number=} opt_time Time this log record was created if other than now.\n *     If 0, we use #goog.now.\n * @param {number=} opt_sequenceNumber Sequence number of this log record. This\n *     should only be passed in when restoring a log record from persistence.\n */\ngoog.debug.LogRecord.prototype.reset = function(\n    level, msg, loggerName, opt_time, opt_sequenceNumber) {\n  if (goog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS) {\n    this.sequenceNumber_ = typeof opt_sequenceNumber == 'number' ?\n        opt_sequenceNumber :\n        goog.debug.LogRecord.nextSequenceNumber_++;\n  }\n\n  this.time_ = opt_time || goog.now();\n  this.level_ = level;\n  this.msg_ = msg;\n  this.loggerName_ = loggerName;\n  delete this.exception_;\n};\n\n\n/**\n * Get the source Logger's name.\n *\n * @return {string} source logger name (may be null).\n */\ngoog.debug.LogRecord.prototype.getLoggerName = function() {\n  return this.loggerName_;\n};\n\n\n/**\n * Get the exception that is part of the log record.\n *\n * @return {Object} the exception.\n */\ngoog.debug.LogRecord.prototype.getException = function() {\n  return this.exception_;\n};\n\n\n/**\n * Set the exception that is part of the log record.\n *\n * @param {Object} exception the exception.\n */\ngoog.debug.LogRecord.prototype.setException = function(exception) {\n  this.exception_ = exception;\n};\n\n\n/**\n * Get the source Logger's name.\n *\n * @param {string} loggerName source logger name (may be null).\n */\ngoog.debug.LogRecord.prototype.setLoggerName = function(loggerName) {\n  this.loggerName_ = loggerName;\n};\n\n\n/**\n * Get the logging message level, for example Level.SEVERE.\n * @return {goog.debug.Logger.Level} the logging message level.\n */\ngoog.debug.LogRecord.prototype.getLevel = function() {\n  return this.level_;\n};\n\n\n/**\n * Set the logging message level, for example Level.SEVERE.\n * @param {goog.debug.Logger.Level} level the logging message level.\n */\ngoog.debug.LogRecord.prototype.setLevel = function(level) {\n  this.level_ = level;\n};\n\n\n/**\n * Get the \"raw\" log message, before localization or formatting.\n *\n * @return {string} the raw message string.\n */\ngoog.debug.LogRecord.prototype.getMessage = function() {\n  return this.msg_;\n};\n\n\n/**\n * Set the \"raw\" log message, before localization or formatting.\n *\n * @param {string} msg the raw message string.\n */\ngoog.debug.LogRecord.prototype.setMessage = function(msg) {\n  this.msg_ = msg;\n};\n\n\n/**\n * Get event time in milliseconds since 1970.\n *\n * @return {number} event time in millis since 1970.\n */\ngoog.debug.LogRecord.prototype.getMillis = function() {\n  return this.time_;\n};\n\n\n/**\n * Set event time in milliseconds since 1970.\n *\n * @param {number} time event time in millis since 1970.\n */\ngoog.debug.LogRecord.prototype.setMillis = function(time) {\n  this.time_ = time;\n};\n\n\n/**\n * Get the sequence number.\n * <p>\n * Sequence numbers are normally assigned in the LogRecord\n * constructor, which assigns unique sequence numbers to\n * each new LogRecord in increasing order.\n * @return {number} the sequence number.\n */\ngoog.debug.LogRecord.prototype.getSequenceNumber = function() {\n  return this.sequenceNumber_;\n};\n","~:compiled-at",1605473095181,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.debug.logrecord.js\",\n\"lineCount\":56,\n\"mappings\":\"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\",\n\"sources\":[\"goog/debug/logrecord.js\"],\n\"sourcesContent\":[\"// Copyright 2006 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Definition of the LogRecord class. Please minimize\\n * dependencies this file has on other closure classes as any dependency it\\n * takes won't be able to use the logging infrastructure.\\n *\\n */\\n\\ngoog.provide('goog.debug.LogRecord');\\n\\n\\n\\n/**\\n * LogRecord objects are used to pass logging requests between\\n * the logging framework and individual log Handlers.\\n * @constructor\\n * @param {goog.debug.Logger.Level} level One of the level identifiers.\\n * @param {string} msg The string message.\\n * @param {string} loggerName The name of the source logger.\\n * @param {number=} opt_time Time this log record was created if other than now.\\n *     If 0, we use #goog.now.\\n * @param {number=} opt_sequenceNumber Sequence number of this log record. This\\n *     should only be passed in when restoring a log record from persistence.\\n */\\ngoog.debug.LogRecord = function(\\n    level, msg, loggerName, opt_time, opt_sequenceNumber) {\\n  this.reset(level, msg, loggerName, opt_time, opt_sequenceNumber);\\n};\\n\\n\\n/**\\n * Time the LogRecord was created.\\n * @type {number}\\n * @private\\n */\\ngoog.debug.LogRecord.prototype.time_;\\n\\n\\n/**\\n * Level of the LogRecord\\n * @type {goog.debug.Logger.Level}\\n * @private\\n */\\ngoog.debug.LogRecord.prototype.level_;\\n\\n\\n/**\\n * Message associated with the record\\n * @type {string}\\n * @private\\n */\\ngoog.debug.LogRecord.prototype.msg_;\\n\\n\\n/**\\n * Name of the logger that created the record.\\n * @type {string}\\n * @private\\n */\\ngoog.debug.LogRecord.prototype.loggerName_;\\n\\n\\n/**\\n * Sequence number for the LogRecord. Each record has a unique sequence number\\n * that is greater than all log records created before it.\\n * @type {number}\\n * @private\\n */\\ngoog.debug.LogRecord.prototype.sequenceNumber_ = 0;\\n\\n\\n/**\\n * Exception associated with the record\\n * @type {?Object}\\n * @private\\n */\\ngoog.debug.LogRecord.prototype.exception_ = null;\\n\\n\\n/**\\n * @define {boolean} Whether to enable log sequence numbers.\\n */\\ngoog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS =\\n    goog.define('goog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS', true);\\n\\n\\n/**\\n * A sequence counter for assigning increasing sequence numbers to LogRecord\\n * objects.\\n * @type {number}\\n * @private\\n */\\ngoog.debug.LogRecord.nextSequenceNumber_ = 0;\\n\\n\\n/**\\n * Sets all fields of the log record.\\n * @param {goog.debug.Logger.Level} level One of the level identifiers.\\n * @param {string} msg The string message.\\n * @param {string} loggerName The name of the source logger.\\n * @param {number=} opt_time Time this log record was created if other than now.\\n *     If 0, we use #goog.now.\\n * @param {number=} opt_sequenceNumber Sequence number of this log record. This\\n *     should only be passed in when restoring a log record from persistence.\\n */\\ngoog.debug.LogRecord.prototype.reset = function(\\n    level, msg, loggerName, opt_time, opt_sequenceNumber) {\\n  if (goog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS) {\\n    this.sequenceNumber_ = typeof opt_sequenceNumber == 'number' ?\\n        opt_sequenceNumber :\\n        goog.debug.LogRecord.nextSequenceNumber_++;\\n  }\\n\\n  this.time_ = opt_time || goog.now();\\n  this.level_ = level;\\n  this.msg_ = msg;\\n  this.loggerName_ = loggerName;\\n  delete this.exception_;\\n};\\n\\n\\n/**\\n * Get the source Logger's name.\\n *\\n * @return {string} source logger name (may be null).\\n */\\ngoog.debug.LogRecord.prototype.getLoggerName = function() {\\n  return this.loggerName_;\\n};\\n\\n\\n/**\\n * Get the exception that is part of the log record.\\n *\\n * @return {Object} the exception.\\n */\\ngoog.debug.LogRecord.prototype.getException = function() {\\n  return this.exception_;\\n};\\n\\n\\n/**\\n * Set the exception that is part of the log record.\\n *\\n * @param {Object} exception the exception.\\n */\\ngoog.debug.LogRecord.prototype.setException = function(exception) {\\n  this.exception_ = exception;\\n};\\n\\n\\n/**\\n * Get the source Logger's name.\\n *\\n * @param {string} loggerName source logger name (may be null).\\n */\\ngoog.debug.LogRecord.prototype.setLoggerName = function(loggerName) {\\n  this.loggerName_ = loggerName;\\n};\\n\\n\\n/**\\n * Get the logging message level, for example Level.SEVERE.\\n * @return {goog.debug.Logger.Level} the logging message level.\\n */\\ngoog.debug.LogRecord.prototype.getLevel = function() {\\n  return this.level_;\\n};\\n\\n\\n/**\\n * Set the logging message level, for example Level.SEVERE.\\n * @param {goog.debug.Logger.Level} level the logging message level.\\n */\\ngoog.debug.LogRecord.prototype.setLevel = function(level) {\\n  this.level_ = level;\\n};\\n\\n\\n/**\\n * Get the \\\"raw\\\" log message, before localization or formatting.\\n *\\n * @return {string} the raw message string.\\n */\\ngoog.debug.LogRecord.prototype.getMessage = function() {\\n  return this.msg_;\\n};\\n\\n\\n/**\\n * Set the \\\"raw\\\" log message, before localization or formatting.\\n *\\n * @param {string} msg the raw message string.\\n */\\ngoog.debug.LogRecord.prototype.setMessage = function(msg) {\\n  this.msg_ = msg;\\n};\\n\\n\\n/**\\n * Get event time in milliseconds since 1970.\\n *\\n * @return {number} event time in millis since 1970.\\n */\\ngoog.debug.LogRecord.prototype.getMillis = function() {\\n  return this.time_;\\n};\\n\\n\\n/**\\n * Set event time in milliseconds since 1970.\\n *\\n * @param {number} time event time in millis since 1970.\\n */\\ngoog.debug.LogRecord.prototype.setMillis = function(time) {\\n  this.time_ = time;\\n};\\n\\n\\n/**\\n * Get the sequence number.\\n * <p>\\n * Sequence numbers are normally assigned in the LogRecord\\n * constructor, which assigns unique sequence numbers to\\n * each new LogRecord in increasing order.\\n * @return {number} the sequence number.\\n */\\ngoog.debug.LogRecord.prototype.getSequenceNumber = function() {\\n  return this.sequenceNumber_;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"debug\",\"LogRecord\",\"goog.debug.LogRecord\",\"level\",\"msg\",\"loggerName\",\"opt_time\",\"opt_sequenceNumber\",\"reset\",\"prototype\",\"time_\",\"level_\",\"msg_\",\"loggerName_\",\"sequenceNumber_\",\"exception_\",\"ENABLE_SEQUENCE_NUMBERS\",\"define\",\"nextSequenceNumber_\",\"goog.debug.LogRecord.prototype.reset\",\"now\",\"getLoggerName\",\"goog.debug.LogRecord.prototype.getLoggerName\",\"getException\",\"goog.debug.LogRecord.prototype.getException\",\"setException\",\"goog.debug.LogRecord.prototype.setException\",\"exception\",\"setLoggerName\",\"goog.debug.LogRecord.prototype.setLoggerName\",\"getLevel\",\"goog.debug.LogRecord.prototype.getLevel\",\"setLevel\",\"goog.debug.LogRecord.prototype.setLevel\",\"getMessage\",\"goog.debug.LogRecord.prototype.getMessage\",\"setMessage\",\"goog.debug.LogRecord.prototype.setMessage\",\"getMillis\",\"goog.debug.LogRecord.prototype.getMillis\",\"setMillis\",\"goog.debug.LogRecord.prototype.setMillis\",\"time\",\"getSequenceNumber\",\"goog.debug.LogRecord.prototype.getSequenceNumber\"]\n}\n"]