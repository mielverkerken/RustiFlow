# RustiFlow: A NIDS Feature Extraction Tool

![RustiFlow Logo](RustiFlow.png)

## Overview

This tool is designed for robust and efficient feature extraction in network intrusion detection systems. Leveraging Rust language and eBPF, it excels in processing high volumes of network traffic with remarkable speed and throughput. (When your traffic is already captured, don't worry! It also has a build in pcap reader.) With various pre-defined feature sets and the ability to create custom feature sets, RustiFlow offers a versatile solution for network security applications.

![Badge displaying GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/matissecallewaert/RustiFlow/rust.yml?logo=github) ![Badge linking to the project documentation website](https://img.shields.io/website?url=https%3A%2F%2Fmatissecallewaert.github.io%2FRustiFlow&label=Documentation) ![GitHub license](https://img.shields.io/github/license/matissecallewaert/RustiFlow) ![Ubuntu 22](https://img.shields.io/badge/Tested%20on%20ubuntu%2022-purple?logo=ubuntu) ![Ubuntu 20](https://img.shields.io/badge/Tested%20on%20ubuntu%2020-purple?logo=ubuntu)

![Animated image showing network flows](flows.gif)

## Key Features

- **High Throughput:** Utilizes Rust and the [Aya](https://aya-rs.dev/) library for eBPF program compilation and execution, ensuring exceptional performance and resource efficiency.
- **Versatile Feature Sets:** Offers a variety of pre-defined feature sets (flows) and the flexibility to create custom feature sets tailored to specific requirements.
- **Pcap File Support:** Facilitates packet analysis from pcap files, compatible with both Linux and Windows generated files.
- **Diverse Output Options:** Features can be outputted to the console, a CSV file, or other formats with minimal effort.

## Feature sets

See the wiki for the different feature sets available.

## Architecture

![RustiFlow Architecture](arch.svg)

## Installation Guide

### Prerequisites:
- **libpcap-dev**:
  ```sh
  sudo apt install libpcap-dev
  ```
- **Rust Installation**:
  ```bash
  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
  ```
- **Nightly Rust Toolchain**:
  ```bash
  rustup install stable
  rustup toolchain install nightly --component rust-src
  ```

### bpf Linker Installation:
- **For Linux x86_64**:
  ```bash
  cargo install bpf-linker
  ```
- **For MacOS/Linux (Other Architectures)**:
  ```bash
  brew install llvm
  cargo install --no-default-features bpf-linker
  ```
- **Ubuntu 20.04 LTS Specific**:
  ```bash
  sudo apt install linux-tools-5.8.0-63-generic
  export PATH=/usr/lib/linux-tools/5.8.0-63-generic:$PATH
  ```

## Building the Project

- **eBPF Programs**:
  ```bash
  cargo xtask ebpf-ipv4
  cargo xtask ebpf-ipv6
  ```
- **User Space Programs**:
  ```bash
  cargo build
  ```

## Usage Instructions

### Real-Time Traffic Capture:
- **Command Help**:
  ```bash
  RUST_LOG=info cargo xtask run -- realtime --help
  ```
  ```bash
  Real-time feature extraction

  Usage: feature-extraction-tool realtime [OPTIONS] <INTERFACE> <FLOW_TYPE> <LIFESPAN> <METHOD> [EXPORT_PATH]

  Arguments:
    <INTERFACE>
            The network interface to capture packets from

    <FLOW_TYPE>
            Possible values:
            - basic-flow:  A basic flow that stores the basic features of a flow
            - cic-flow:    Represents the CIC Flow, giving 83 features
            - cidds-flow:  Represents the CIDDS Flow, giving 10 features
            - nf-flow:     Represents a nfstream inspired flow, giving 69 features
            - ntl-flow:    Represents the NTL Flow, giving 120 features
            - custom-flow: Represents a flow that you can implement yourself

    <LIFESPAN>
            The maximum lifespan of a flow in seconds

    <METHOD>
            Output method

            Possible values:
            - print: The output will be printed to the console
            - csv:   The output will be written to a CSV file

    [EXPORT_PATH]
            File path for output (used if method is Csv)

  Options:
    -n, --no-contaminant-features
            Whether not to include contaminant features

        --interval <INTERVAL>
            The print interval for open flows in seconds, needs to be smaller than the flow maximum lifespan

    -h, --help
            Print help (see a summary with '-h')
  ```

### Reading from a Pcap File:

- **Command Help**:
  ```bash
  RUST_LOG=info cargo xtask run -- pcap --help
  ```
  ```bash
  Feature extraction from a pcap file

  Usage: feature-extraction-tool pcap [OPTIONS] <FLOW_TYPE> <LIFESPAN> <PATH> <METHOD> [EXPORT_PATH]

  Arguments:
    <FLOW_TYPE>
            Possible values:
            - basic-flow:  A basic flow that stores the basic features of a flow
            - cic-flow:    Represents the CIC Flow, giving 83 features
            - cidds-flow:  Represents the CIDDS Flow, giving 10 features
            - nf-flow:     Represents a nfstream inspired flow, giving 69 features
            - ntl-flow:    Represents the NTL Flow, giving 120 features
            - custom-flow: Represents a flow that you can implement yourself

    <LIFESPAN>
            The maximum lifespan of a flow in seconds

    <PATH>
            The relative path to the pcap file

    <METHOD>
            Output method

            Possible values:
            - print: The output will be printed to the console
            - csv:   The output will be written to a CSV file

    [EXPORT_PATH]
            File path for output (used if method is Csv)

  Options:
    -n, --no-contaminant-features
            Whether not to include contaminant features

    -h, --help
            Print help (see a summary with '-h')

  ```

**Note:** For specific logging levels, adjust `RUST_LOG` to `error` for error messages, and `debug` for debug messages. If you don't want any additional logs, just remove `RUST_LOG=info`.

---
