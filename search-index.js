var searchIndex = new Map(JSON.parse('[\
["common",{"doc":"","t":"FONNNNOOOONONOOOOOOOOONNNNOO","n":["BasicFeatures","ack_flag","borrow","borrow_mut","clone","clone_into","cwe_flag","data_length","ece_flag","fin_flag","from","header_length","into","ipv4_destination","ipv4_source","length","port_destination","port_source","protocol","psh_flag","rst_flag","syn_flag","to_owned","try_from","try_into","type_id","urg_flag","window_size"],"q":[[0,"common"],[28,"core::result"],[29,"core::any"]],"d":["BasicFeatures is a struct collection all traffic data and …","","","","","","","","","","Returns the argument unchanged.","","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","",""],"i":[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"f":"``{ce{}{}}0{bb}{{ce}d{}{}}````{cc{}}`3`````````3{c{{f{e}}}{}{}}0{ch{}}``","c":[],"p":[[5,"BasicFeatures",0],[1,"unit"],[6,"Result",28],[5,"TypeId",29]],"b":[]}],\
["feature_extraction_tool",{"doc":"","t":"CCHHHCHCCPPPFGPPPGPPPPNNNNNNNNNNNNNONNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNOOOOOCCCFNNOOOOOOOOONOOONOOOOOOOOONOOONOOONNNNFOOOOOONNOOOOOOOOOOOOOOOOOOOOONONOOOOOOOOOOOOOOOOOOOOOOONNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNOOOOONNNNOOONNNNNNNNNNNNNNNKMMCCFNNHNNNHNNNPPKGNNNNNNNMNNNCCFOOOOOOOOONNOOOOOOOOOOOOOOOOONOOOOOOOOOOOOONNOOOOOOOOOOOOOOOOOOOOOONOOOOOOONOOOOOOOOOOOOOOONNNOKMCH","n":["args","flows","handle_dataset","handle_realtime","main","parsers","process_packet","records","utils","CicDdos2019","CicIds2017","CicIdsCollection","Cli","Commands","CseCicIds2018","Ctu13","Ctu13Ld","Dataset","Dataset","Realtime","UnswNb15","UnswNb15Ld","augment_args","augment_args_for_update","augment_subcommands","augment_subcommands_for_update","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","clone","clone_into","command","command","command_for_update","fmt","fmt","fmt","from","from","from","from_arg_matches","from_arg_matches","from_arg_matches_mut","from_arg_matches_mut","group_id","has_subcommand","into","into","into","to_owned","to_possible_value","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id","update_from_arg_matches","update_from_arg_matches","update_from_arg_matches_mut","update_from_arg_matches_mut","value_variants","dataset","interface","interval","lifespan","path","basic_flow","cic_flow","flow","BasicFlow","borrow","borrow_mut","bwd_ack_flag_count","bwd_cwe_flag_count","bwd_ece_flag_count","bwd_fin_flag_count","bwd_packet_count","bwd_psh_flag_count","bwd_rst_flag_count","bwd_syn_flag_count","bwd_urg_flag_count","dump","first_timestamp","flow_end_of_flow_ack","flow_id","from","fwd_ack_flag_count","fwd_cwe_flag_count","fwd_ece_flag_count","fwd_fin_flag_count","fwd_packet_count","fwd_psh_flag_count","fwd_rst_flag_count","fwd_syn_flag_count","fwd_urg_flag_count","into","ipv4_destination","ipv4_source","last_timestamp","new","port_destination","port_source","protocol","try_from","try_into","type_id","update_flow","CicFlow","active_count","active_max","active_mean","active_min","active_std","basic_flow","borrow","borrow_mut","bwd_bulk_duration","bwd_bulk_packet_count","bwd_bulk_packet_count_help","bwd_bulk_size_help","bwd_bulk_size_total","bwd_bulk_start_help","bwd_bulk_state_count","bwd_header_length","bwd_iat_max","bwd_iat_mean","bwd_iat_min","bwd_iat_std","bwd_iat_total","bwd_init_win_bytes","bwd_last_bulk_timestamp","bwd_last_timestamp","bwd_pkt_len_max","bwd_pkt_len_mean","bwd_pkt_len_min","bwd_pkt_len_std","bwd_pkt_len_tot","dump","end_active","from","fwd_act_data_pkt","fwd_bulk_duration","fwd_bulk_packet_count","fwd_bulk_packet_count_help","fwd_bulk_size_help","fwd_bulk_size_total","fwd_bulk_start_help","fwd_bulk_state_count","fwd_header_len_min","fwd_header_length","fwd_iat_max","fwd_iat_mean","fwd_iat_min","fwd_iat_std","fwd_iat_total","fwd_init_win_bytes","fwd_last_bulk_timestamp","fwd_last_timestamp","fwd_pkt_len_max","fwd_pkt_len_mean","fwd_pkt_len_min","fwd_pkt_len_std","fwd_pkt_len_tot","get_active_min","get_bwd_bulk_rate","get_bwd_bytes_bulk","get_bwd_iat_min","get_bwd_packet_length_mean","get_bwd_packet_length_min","get_bwd_packets_bulk","get_bwd_packets_s","get_down_up_ratio","get_duration","get_flow_bytes_s","get_flow_iat_max","get_flow_iat_mean","get_flow_iat_min","get_flow_iat_std","get_flow_packet_length_max","get_flow_packet_length_mean","get_flow_packet_length_min","get_flow_packet_length_std","get_flow_packet_length_variance","get_flow_packets_s","get_fwd_bulk_rate","get_fwd_bytes_bulk","get_fwd_header_len_min","get_fwd_iat_min","get_fwd_packet_length_mean","get_fwd_packet_length_min","get_fwd_packets_bulk","get_fwd_packets_s","get_idle_min","get_sf_bwd_bytes","get_sf_bwd_packets","get_sf_fwd_bytes","get_sf_fwd_packets","idle_count","idle_max","idle_mean","idle_min","idle_std","increase_bwd_header_length","increase_fwd_header_length","into","new","sf_count","sf_last_packet_timestamp","start_active","try_from","try_into","type_id","update_active_flow","update_active_idle_time","update_bwd_bulk_stats","update_bwd_iat_stats","update_bwd_pkt_len_stats","update_flow","update_fwd_bulk_stats","update_fwd_header_len_min","update_fwd_iat_stats","update_fwd_pkt_len_stats","update_idle_flow","update_subflows","Flow","dump","update_flow","csv_parser","parser","CsvParser","borrow","borrow_mut","filter_record","from","into","parse","preprocess_headers","try_from","try_into","type_id","Csv","Io","Parser","ReadError","borrow","borrow_mut","fmt","from","from","from","into","parse","try_from","try_into","type_id","cic_record","print","CicRecord","ack_flag_count","act_data_pkt_fwd","active_max","active_mean","active_min","active_std","average_packet_size","avg_bwd_segment_size","avg_fwd_segment_size","borrow","borrow_mut","bwd_avg_bulk_rate","bwd_avg_bytes_bulk","bwd_avg_packets_bulk","bwd_header_length","bwd_iat_max","bwd_iat_mean","bwd_iat_min","bwd_iat_std","bwd_iat_total","bwd_packets_s","bwd_pkt_len_max","bwd_pkt_len_mean","bwd_pkt_len_min","bwd_pkt_len_std","bwd_psh_flags","bwd_urg_flags","cwe_flag_count","deserialize","down_up_ratio","dst_ip","dst_port","ece_flag_count","fin_flag_count","flow_bytes_s","flow_duration","flow_iat_max","flow_iat_mean","flow_iat_min","flow_iat_std","flow_id","flow_packets_s","fmt","from","fwd_avg_bulk_rate","fwd_avg_bytes_bulk","fwd_avg_packets_bulk","fwd_header_length","fwd_iat_max","fwd_iat_mean","fwd_iat_min","fwd_iat_std","fwd_iat_total","fwd_packets_s","fwd_pkt_len_max","fwd_pkt_len_mean","fwd_pkt_len_min","fwd_pkt_len_std","fwd_psh_flags","fwd_urg_flags","idle_max","idle_mean","idle_min","idle_std","init_win_bytes_backward","init_win_bytes_forward","into","label","max_packet_length","min_packet_length","min_seg_size_forward","packet_length_mean","packet_length_std","packet_length_variance","print","protocol","psh_flag_count","rst_flag_count","src_ip","src_port","subflow_bwd_bytes","subflow_bwd_packets","subflow_fwd_bytes","subflow_fwd_packets","syn_flag_count","timestamp","tot_bwd_pkts","tot_fwd_pkts","totlen_bwd_pkts","totlen_fwd_pkts","try_from","try_into","type_id","urg_flag_count","Print","print","utils","create_flow_id"],"q":[[0,"feature_extraction_tool"],[9,"feature_extraction_tool::args"],[68,"feature_extraction_tool::args::Commands"],[73,"feature_extraction_tool::flows"],[76,"feature_extraction_tool::flows::basic_flow"],[114,"feature_extraction_tool::flows::cic_flow"],[231,"feature_extraction_tool::flows::flow"],[234,"feature_extraction_tool::parsers"],[236,"feature_extraction_tool::parsers::csv_parser"],[247,"feature_extraction_tool::parsers::parser"],[262,"feature_extraction_tool::records"],[264,"feature_extraction_tool::records::cic_record"],[359,"feature_extraction_tool::records::print"],[361,"feature_extraction_tool::utils"],[362,"feature_extraction_tool::utils::utils"],[363,"alloc::string"],[364,"core::option"],[365,"anyhow"],[366,"core::result"],[367,"common"],[368,"dashmap"],[369,"alloc::sync"],[370,"clap_builder::builder::command"],[371,"core::fmt"],[372,"core::fmt"],[373,"clap_builder"],[374,"clap_builder::util::id"],[375,"clap_builder::builder::possible_value"],[376,"core::any"],[377,"std::time"],[378,"chrono::offset::utc"],[379,"chrono::datetime"],[380,"csv::string_record"],[381,"std::collections::hash::set"],[382,"core::iter::traits::iterator"],[383,"alloc::boxed"],[384,"csv::error"],[385,"std::io::error"],[386,"serde::de"]],"d":["","","","","","","","","","CIC-DDoS2019 from the Canadian Institute for Cybersecurity","CIC-IDS2017 from the Canadian Institute for Cybersecurity","CIC-IDS-Collection from Laurens D’Hooge","","","CSE-CIC-IDS2018 from the Canadian Institute for …","CTU-13 from CTU university of the Czech Republic","CTU-13 without contaminant features from Laurens D’Hooge","","Feature extraction from a dataset","Real-time feature extraction","UNSW-NB15 from UNSW Sydney","UNSW-NB15 without contaminant features from Laurens D’…","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","","","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","The network interface to capture packets from","The print interval for open flows in seconds, needs to be …","The maximum lifespan of a flow in seconds","The relative path to the dataset","","","","A basic flow that stores the basic features of a flow.","","","The number of ACK flags in the backward direction.","The number of CWE flags in the backward direction.","The number of ECE flags in the backward direction.","The number of FIN flags in the backward direction.","The number of packets in the backward direction.","The number of PSH flags in the backward direction.","The number of RST flags in the backward direction.","The number of SYN flags in the backward direction.","The number of URG flags in the backward direction.","","The first timestamp of the flow.","The last ACK of the flow.","The unique identifier of the flow.","Returns the argument unchanged.","The number of ACK flags in the forward direction.","The number of CWE flags in the forward direction.","The number of ECE flags in the forward direction.","The number of FIN flags in the forward direction.","The number of packets in the forward direction.","The number of PSH flags in the forward direction.","The number of RST flags in the forward direction.","The number of SYN flags in the forward direction.","The number of URG flags in the forward direction.","Calls <code>U::from(self)</code>.","The destination IP address of the flow.","The source IP address of the flow.","The last timestamp of the flow.","","The destination port of the flow.","The source port of the flow.","The protocol of the flow.","","","","","Represents a CIC Flow, encapsulating various metrics and …","The number of active periods.","The maximum active period.","The mean of active periods.","The minimum active period.","The standard deviation of active periods.","The basic flow information.","","","The total duration of bulk packets in the backward flow.","The number of bulk packets in the backward flow.","Helper variable for bulk packet count.","Helper variable for bulk size.","The total size of bulk packets in the backward flow.","Helper variable for bulk start timestamp.","The number of bulk states in the backward flow.","The total header length of the backward flow.","The maximum inter-arrival time of packets in the backward …","The mean inter-arrival time of packets in the backward …","The minimum inter-arrival time of packets in the backward …","The standard deviation of the inter-arrival time of …","The total inter-arrival time of packets in the backward …","The initial window size of the backward flow.","The timestamp of the last bulk packet in the backward flow.","The timestamp of the last packet in the backward flow.","The maximum length of packets in the backward flow.","The mean length of packets in the backward flow.","The minimum length of packets in the backward flow.","The standard deviation of the length of packets in the …","The total length of packets in the backward flow.","","The timestamp of the end of an active period.","Returns the argument unchanged.","The number of data packets in the forward flow with more …","The total duration of bulk packets in the forward flow.","The number of bulk packets in the forward flow.","Helper variable for bulk packet count.","Helper variable for bulk size.","The total size of bulk packets in the forward flow.","Helper variable for bulk start timestamp.","The number of bulk states in the forward flow.","The minimum header length of the forward flow.","The total header length of the forward flow.","The maximum inter-arrival time of packets in the forward …","The mean inter-arrival time of packets in the forward flow.","The minimum inter-arrival time of packets in the forward …","The standard deviation of the inter-arrival time of …","The total inter-arrival time of packets in the forward …","The initial window size of the forward flow.","The timestamp of the last bulk packet in the forward flow.","The timestamp of the last packet in the forward flow.","The maximum length of packets in the forward flow.","The mean length of packets in the forward flow.","The minimum length of packets in the forward flow.","The standard deviation of the length of packets in the …","The total length of packets in the forward flow.","Retrieves the minimum active time observed in the flow.","Calculates the backward bulk rate.","Retrieves the average size of bulk transfers in the …","Retrieves the minimum IAT of packets in the backward flow.","Retrieves the mean length of backward packets.","Retrieves the minimum packet length for backward packets.","Retrieves the average number of packets in bulk transfers …","Calculates the backward packets per second rate of the …","Calculates the down/up ratio of the flow.","Calculates the duration between two timestamps in …","Calculates the bytes per second rate of the flow.","Retrieves the maximum inter-arrival time (IAT) observed in …","Calculates the mean inter-arrival time (IAT) for the flow.","Retrieves the minimum inter-arrival time (IAT) observed in …","Calculates the pooled standard deviation of inter-arrival …","Retrieves the maximum packet length in the flow, …","Calculates the mean packet length of the flow, averaging …","Retrieves the minimum packet length in the flow, …","Retrieves the standard deviation of packet lengths in the …","Calculates the variance of the packet lengths in the flow.","Calculates the packets per second rate of the flow.","Calculates the forward bulk rate.","Retrieves the average size of bulk transfers in the …","Retrieves the minimum length of the forward header.","Retrieves the minimum IAT of packets in the forward flow.","Retrieves the mean length of forward packets.","Retrieves the minimum packet length for forward packets.","Retrieves the average number of packets in bulk transfers …","Calculates the forward packets per second rate of the flow.","Retrieves the minimum idle time observed in the flow.","Calculates the average number of backward bytes per …","Calculates the average number of backward packets per …","Calculates the average number of forward bytes per subflow.","Calculates the average number of forward packets per …","The number of idle periods.","The maximum idle period.","The mean of idle periods.","The minimum idle period.","The standard deviation of idle periods.","Increases the length of the backward header.","Increases the length of the forward header.","Calls <code>U::from(self)</code>.","Constructs a new <code>CicFlow</code>.","The number of subflows.","The timestamp of the last packet in the subflow.","The timestamp of the start of an active period.","","","","Updates the statistics for active flow periods.","Updates the active and idle time statistics of the flow.","Updates the backward bulk statistics in a similar manner …","Updates inter-arrival time (IAT) stats for backward …","Updates statistics for the length of backward packets.","","Updates the forward bulk statistics based on the incoming …","Updates the minimum length of the forward header.","Updates inter-arrival time (IAT) stats for forward packets.","Updates statistics for the length of forward packets.","Updates the statistics for idle flow periods.","Updates the subflow count based on the timestamp of the …","<code>Flow</code> defines the behavior of a network flow.","Dumps the current state of the flow.","Updates the flow with a new packet.","","","","","","","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","","","","","","","","","","","","","","","","","","","","","","","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Creates a unique identifier for a network flow."],"i":[0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,18,18,1,1,15,15,18,18,15,18,1,15,18,1,1,1,15,15,15,15,18,1,15,18,1,15,18,15,18,15,18,15,18,1,1,1,15,18,1,15,18,1,15,18,1,15,18,15,18,1,49,50,50,50,49,0,0,0,0,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,0,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,0,34,34,0,0,0,38,38,0,38,38,38,0,38,38,38,41,41,0,0,41,41,41,41,41,41,41,45,41,41,41,0,0,0,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,0,48,0,0],"f":"``{{bd}f}{{h{l{j}}j}{{A`{fn}}}}{{}f}`{{Ab{Ah{{Af{hAd}}}}Aj}f}```````````````{AlAl}000{ce{}{}}00000{bb}{{ce}f{}{}}{{}Al}`0{{AnB`}Bb}{{BdB`}Bb}{{bB`}Bb}{cc{}}00{Bf{{A`{AnBh}}}}{Bf{{A`{BdBh}}}}10{{}{{l{Bj}}}}{dAj};;;;{b{{l{Bl}}}}{c{{A`{e}}}{}{}}00000{cBn{}}00{{AnBf}{{A`{fBh}}}}{{BdBf}{{A`{fBh}}}}10{{}{{C`{b}}}}`````````{ce{}{}}0`````````{Cbh}```<`````````1```{{hCdCfCdCfCh}Cb}```776{{CbAbCjAj}{{l{h}}}}```````33`````````````````````{Adh}`?```````````````````````{AdCl}000{AdCd}0111{{Ad{D`{Cn}}{D`{Cn}}}Cl}222221{AdDb}23333323223333333`````{{AdCd}f}09{{hCdCfCdCfCh}Ad}```??>{{AdCl}f}{{AdCjCl}f}{{AdCjCd}f}24{{AdAbCjAj}{{l{h}}}}15353{{AdCj}f}`{Ddh}{{DdAbCjAj}{{l{h}}}}```{ce{}{}}0{{Df{Dj{Dh}}}Df}{cc{}}2{{Dld}{{A`{{E`{Dn}}Eb}}}}{Df{{Ed{Df{Dj{Dh}}}}}}{c{{A`{e}}}{}{}}0{cBn{}}````66{{EbB`}Bb}{EfEb}{EhEb}79{{Ejd}{{A`{{E`{Dn}}Eb}}}}554````````````::`````````````````{c{{A`{El}}}En}`````````````{{ElB`}Bb}:``````````````````````<```````{Elf}```````````````887``{F`f}`{{CdCfCdCfCh}h}","c":[],"p":[[6,"Dataset",9],[1,"str"],[1,"unit"],[5,"String",363],[1,"u64"],[6,"Option",364],[5,"Error",365],[6,"Result",366],[5,"BasicFeatures",367],[5,"CicFlow",114],[5,"DashMap",368],[5,"Arc",369],[1,"bool"],[5,"Command",370],[5,"Cli",9],[5,"Formatter",371],[8,"Result",371],[6,"Commands",9],[5,"ArgMatches",372],[8,"Error",373],[5,"Id",374],[5,"PossibleValue",375],[5,"TypeId",376],[1,"slice"],[5,"BasicFlow",76],[1,"u32"],[1,"u16"],[1,"u8"],[5,"Instant",377],[1,"f64"],[5,"Utc",378],[5,"DateTime",379],[1,"f32"],[10,"Flow",231],[5,"StringRecord",380],[1,"usize"],[5,"HashSet",381],[5,"CsvParser",236],[10,"Iterator",382],[5,"Box",383],[6,"ReadError",247],[1,"tuple"],[5,"Error",384],[5,"Error",385],[10,"Parser",247],[5,"CicRecord",264],[10,"Deserializer",386],[10,"Print",359],[15,"Dataset",68],[15,"Realtime",68]],"b":[[254,"impl-From%3CError%3E-for-ReadError"],[255,"impl-From%3CError%3E-for-ReadError"]]}],\
["xtask",{"doc":"","t":"PPGFPNNNNNNNNCNNONNNNNNNNNNNNNNHCNNNNNNNNNNGPPFNNNNNNHNNNNNNNNNNNNNNNOONNNNNNNNNNFNNNNOHNNNNNNNNOHOONNNNN","n":["BuildEgressEbpf","BuildIngressEbpf","Command","Options","Run","augment_args","augment_args_for_update","augment_subcommands","augment_subcommands_for_update","borrow","borrow","borrow_mut","borrow_mut","build_ebpf","command","command","command","command_for_update","command_for_update","fmt","fmt","from","from","from_arg_matches","from_arg_matches","from_arg_matches_mut","from_arg_matches_mut","group_id","has_subcommand","into","into","main","run","try_from","try_from","try_into","try_into","type_id","type_id","update_from_arg_matches","update_from_arg_matches","update_from_arg_matches_mut","update_from_arg_matches_mut","Architecture","BpfEb","BpfEl","Options","augment_args","augment_args_for_update","borrow","borrow","borrow_mut","borrow_mut","build_ebpf","clone","clone_into","command","command_for_update","fmt","fmt","fmt","from","from","from_arg_matches","from_arg_matches_mut","from_str","group_id","into","into","release","target","to_owned","to_string","try_from","try_from","try_into","try_into","type_id","type_id","update_from_arg_matches","update_from_arg_matches_mut","Options","augment_args","augment_args_for_update","borrow","borrow_mut","bpf_target","build","command","command_for_update","fmt","from","from_arg_matches","from_arg_matches_mut","group_id","into","release","run","run_args","runner","try_from","try_into","type_id","update_from_arg_matches","update_from_arg_matches_mut"],"q":[[0,"xtask"],[43,"xtask::build_ebpf"],[81,"xtask::run"],[105,"clap_builder::builder::command"],[106,"core::fmt"],[107,"core::fmt"],[108,"clap_builder"],[109,"core::result"],[110,"clap_builder::util::id"],[111,"core::option"],[112,"core::any"],[113,"alloc::string"],[114,"anyhow"]],"d":["","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","","","","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Build the release target","Set the endianness of the BPF target","","","","","","","","","","","","","","","","Set the endianness of the BPF target","Build the project","","","","Returns the argument unchanged.","","","","Calls <code>U::from(self)</code>.","Build and run the release target","Build and run the project","Arguments to pass to your application","The command used to wrap your application","","","","",""],"i":[5,5,0,0,5,2,2,5,5,2,5,2,5,0,2,5,2,2,5,2,5,2,5,2,5,2,5,2,5,2,5,0,0,2,5,2,5,2,5,2,5,2,5,0,18,18,0,15,15,18,15,18,15,0,18,18,15,15,18,18,15,18,15,15,15,18,15,18,15,15,15,18,18,18,15,18,15,18,15,15,15,0,19,19,19,19,19,0,19,19,19,19,19,19,19,19,19,0,19,19,19,19,19,19,19],"f":"`````{bb}000{ce{}{}}000`{{}b}0`00{{df}h}{{jf}h}{cc{}}0{l{{A`{dn}}}}{l{{A`{jn}}}}10{{}{{Ad{Ab}}}}{AfAh}88{{}Aj}`{c{{A`{e}}}{}{}}000{cAl{}}0{{dl}{{A`{Ajn}}}}{{jl}{{A`{Ajn}}}}10````>>===={{AnB`}{{A`{AjBb}}}}{BdBd}{{ce}Aj{}{}}??{{Bdf}h}0{{Anf}h}>>{l{{A`{Ann}}}}0{Af{{A`{Bdc}}}{}}={ce{}{}}0``0{cB`{}}<<<<;;{{Anl}{{A`{Ajn}}}}0`{bb}033`{Bf{{A`{AjBb}}}}{{}b}0{{Bff}h}{cc{}}{l{{A`{Bfn}}}}0{{}{{Ad{Ab}}}}9`5``{c{{A`{e}}}{}{}}0{cAl{}}{{Bfl}{{A`{Ajn}}}}0","c":[],"p":[[5,"Command",105],[5,"Options",0],[5,"Formatter",106],[8,"Result",106],[6,"Command",0],[5,"ArgMatches",107],[8,"Error",108],[6,"Result",109],[5,"Id",110],[6,"Option",111],[1,"str"],[1,"bool"],[1,"unit"],[5,"TypeId",112],[5,"Options",43],[5,"String",113],[5,"Error",114],[6,"Architecture",43],[5,"Options",81]],"b":[[58,"impl-Display-for-Architecture"],[59,"impl-Debug-for-Architecture"]]}]\
]'));
if (typeof exports !== 'undefined') exports.searchIndex = searchIndex;
else if (window.initSearch) window.initSearch(searchIndex);
