searchState.loadedDescShard("rustiflow", 0, "A basic flow that stores the basic features of a flow.\nRepresents the CIC Flow, giving 83 features.\nRepresents the CIDDS Flow, giving 10 features.\nThe output will be written to a CSV file\nRepresents a flow that you can implement yourself.\nRepresents the NTL Flow, giving 120 features.\nRepresents a nfstream inspired flow, giving 69 features.\nFeature extraction from a pcap file\nThe output will be printed to the console\nReal-time feature extraction\nThe maximum time a flow is allowed to last in seconds …\nThe maximum time a flow is allowed to last in seconds\nSubcommands (Real-time or Pcap)\nConfiguration file path\nWhether to drop contaminant features\nWhether to drop contaminant features\nThe print interval for open flows in seconds (optional)\nThe print interval for open flows in seconds, needs to be …\nInterval (in seconds) for checking and expiring flows in …\nInterval (in seconds) for checking and expiring flows in …\nFile path for output (used if method is Csv)\nFile path for output (used if method is Csv)\nThe feature set to use (required if no config file is …\nThe feature set to use\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nWhether to export the feature header\nWhether to export the feature header\nThe maximum time with no packets for a flow in seconds …\nThe maximum time with no packets for a flow in seconds\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nOutput method (required if no config file is provided)\nOutput method\nThe numbers of threads to use for processing packets …\nThe numbers of threads to use for processing packets …\nWhether to capture only ingress packets\nThe network interface to capture packets from\nThe relative path to the pcap file\nChecks if enough time has passed to trigger flow …\nCreate and insert a new flow for the given packet.\nExport all flows in the flow map in order of first packet …\nExport all expired flows.\nExports a single flow.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nProcesses a packet (either IPv4 or IPv6) and updates the …\nUpdates a flow with a packet and exports flow if …\nA basic flow that stores the basic features of a flow.\nThe number of ACK flags in the backward direction.\nThe number of CWE flags in the backward direction.\nThe number of ECE flags in the backward direction.\nThe number of FIN flags in the backward direction.\nThe number of packets in the backward direction.\nThe number of PSH flags in the backward direction.\nThe number of RST flags in the backward direction.\nThe number of SYN flags in the backward direction.\nThe number of URG flags in the backward direction.\nThe first timestamp of the flow.\nThe last ACK of the flow.\nThe unique identifier of the flow.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThe number of ACK flags in the forward direction.\nThe number of CWE flags in the forward direction.\nThe number of ECE flags in the forward direction.\nThe number of FIN flags in the forward direction.\nThe number of packets in the forward direction.\nThe number of PSH flags in the forward direction.\nThe number of RST flags in the forward direction.\nThe number of SYN flags in the forward direction.\nThe number of URG flags in the forward direction.\nCalculates the flow duration in microseconds.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe destination IP address of the flow.\nThe source IP address of the flow.\nChecks if the flow is finished.\nThe last timestamp of the flow.\nThe destination port of the flow.\nThe source port of the flow.\nThe protocol of the flow.\nRepresents a CIC Flow, encapsulating various metrics and …\nThe number of active periods.\nThe maximum active period.\nThe mean of active periods.\nThe minimum active period.\nThe standard deviation of active periods.\nThe basic flow information.\nThe total duration of bulk packets in the backward flow.\nThe number of bulk packets in the backward flow.\nHelper variable for bulk packet count.\nHelper variable for bulk size.\nThe total size of bulk packets in the backward flow.\nHelper variable for bulk start timestamp.\nThe number of bulk states in the backward flow.\nThe total header length of the backward flow.\nThe maximum inter-arrival time of packets in the backward …\nThe mean inter-arrival time of packets in the backward …\nThe minimum inter-arrival time of packets in the backward …\nThe standard deviation of the inter-arrival time of …\nThe total inter-arrival time of packets in the backward …\nThe initial window size of the backward flow.\nThe timestamp of the last bulk packet in the backward flow.\nThe timestamp of the last packet in the backward flow.\nThe maximum length of packets in the backward flow.\nThe mean length of packets in the backward flow.\nThe minimum length of packets in the backward flow.\nThe standard deviation of the length of packets in the …\nThe total length of packets in the backward flow.\nThe total length of transport layer segments in the …\nThe timestamp of the end of an active period.\nReturns the argument unchanged.\nThe number of data packets in the forward flow with more …\nThe total duration of bulk packets in the forward flow.\nThe number of bulk packets in the forward flow.\nHelper variable for bulk packet count.\nHelper variable for bulk size.\nThe total size of bulk packets in the forward flow.\nHelper variable for bulk start timestamp.\nThe number of bulk states in the forward flow.\nThe minimum header length of the forward flow.\nThe total header length of the forward flow.\nThe maximum inter-arrival time of packets in the forward …\nThe mean inter-arrival time of packets in the forward flow.\nThe minimum inter-arrival time of packets in the forward …\nThe standard deviation of the inter-arrival time of …\nThe total inter-arrival time of packets in the forward …\nThe initial window size of the forward flow.\nThe timestamp of the last bulk packet in the forward flow.\nThe timestamp of the last packet in the forward flow.\nThe maximum length of packets in the forward flow.\nThe mean length of packets in the forward flow.\nThe minimum length of packets in the forward flow.\nThe standard deviation of the length of packets in the …\nThe total length of packets in the forward flow.\nThe total length of transport layer segments in the …\nRetrieves the minimum active time observed in the flow.\nCalculates the backward bulk rate.\nRetrieves the average size of bulk transfers in the …\nRetrieves the minimum IAT of packets in the backward flow.\nRetrieves the minimum packet length for backward packets.\nRetrieves the average number of packets in bulk transfers …\nCalculates the backward packets per second rate of the …\nRetrieves the mean segemnt length of backward packets.\nCalculates the down/up ratio of the flow.\nCalculates the bytes per second rate of the flow.\nRetrieves the maximum inter-arrival time (IAT) observed in …\nCalculates the mean inter-arrival time (IAT) for the flow.\nRetrieves the minimum inter-arrival time (IAT) observed in …\nCalculates the pooled standard deviation of inter-arrival …\nRetrieves the maximum packet length in the flow, …\nCalculates the mean packet length of the flow, averaging …\nRetrieves the minimum packet length in the flow, …\nRetrieves the standard deviation of packet lengths in the …\nCalculates the variance of the packet lengths in the flow.\nCalculates the packets per second rate of the flow.\nCalculates the mean packet segment length of the flow, …\nCalculates the forward bulk rate.\nRetrieves the average size of bulk transfers in the …\nRetrieves the minimum length of the forward header.\nRetrieves the minimum IAT of packets in the forward flow.\nRetrieves the minimum packet length for forward packets.\nRetrieves the average number of packets in bulk transfers …\nCalculates the forward packets per second rate of the flow.\nRetrieves the mean segment length of forward packets.\nRetrieves the minimum idle time observed in the flow.\nCalculates the average number of backward bytes per …\nCalculates the average number of backward packets per …\nCalculates the average number of forward bytes per subflow.\nCalculates the average number of forward packets per …\nThe number of idle periods.\nThe maximum idle period.\nThe mean of idle periods.\nThe minimum idle period.\nThe standard deviation of idle periods.\nIncreases the length of the backward header.\nIncreases the length of the forward header.\nCalls <code>U::from(self)</code>.\nThe number of subflows.\nThe timestamp of the last packet in the subflow.\nThe timestamp of the start of an active period.\nUpdates the statistics for active flow periods.\nUpdates the active and idle time statistics of the flow.\nUpdates the backward bulk statistics in a similar manner …\nUpdates inter-arrival time (IAT) stats for backward …\nUpdates statistics for the length of backward packets.\nUpdates the forward bulk statistics based on the incoming …\nUpdates the minimum length of the forward header.\nUpdates inter-arrival time (IAT) stats for forward packets.\nUpdates statistics for the length of forward packets.\nUpdates the statistics for idle flow periods.\nUpdates the subflow count based on the timestamp of the …\nRepresents a CIDDS Flow, encapsulating various metrics and …\nThe basic flow information.\nThe number of bytes in the flow.\nReturns the argument unchanged.\nRetrieves the flags feature string of the flow.\nCalls <code>U::from(self)</code>.\nRepresents a Custom Flow, encapsulating various metrics …\nChoose here for an existing flow type or leave the basic …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\n<code>Flow</code> defines the behavior of a network flow.\nDumps the current state of the flow.\nDumps the current state of the flow without contaminant …\nReturns the flow key.\nReturns a first record with the features of the flow.\nReturns a first record with the features of the flow …\nReturns the first timestamp of the flow.\nChecks if the flow is expired.\nConstructs a new <code>Flow</code>.\nUpdates the flow with a new packet.\nRepresents a Nfstream inspired Flow, encapsulating various …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nRepresents a NTL Flow, encapsulating various metrics and …\nThe maximum header length of the backward flow.\nThe mean packet length of the backward flow.\nThe minimum header length of the backward flow.\nThe std header length of the backward flow.\nThe cic flow information.\nReturns the argument unchanged.\nThe maximum header length of the forward flow.\nThe mean packet length of the forward flow.\nThe minimum header length of the forward flow.\nThe std header length of the forward flow.\nRetrieves the minimum packet header length for backward …\nRetrieves the maximum packet header length in the flow, …\nCalculates the mean packet header length of the flow, …\nRetrieves the minimum packet header length in the flow, …\nRetrieves the standard deviation of packet lengths in the …\nCalculates the variance of the packet lengths in the flow.\nRetrieves the minimum packet header length for forward …\nCalls <code>U::from(self)</code>.\nUpdates statistics for the length of forward packets.\nUpdates statistics for the header length of forward …\nCalculates the new mean using the old_mean, the number of …\nCalculates the new standard deviation using the old …\nFlushes the writer and closes the output file Explicitly …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nGenerates a biflow key\nGenerates a flow key based on IPs, ports, and protocol\nGenerates a flow key based on IPs, ports, and protocol in …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCreates shard channels to FlowTables and spawns processing …\nProcesses and sends packet features to the appropriate …\nStarts the realtime processing of packets on the given …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.")